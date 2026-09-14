import { describe, expect, it } from "vitest";
import {
  buildInquiryBody,
  buildInquiryUrl,
  getStartingPoints,
  sanitizeProductIds,
  useCases,
} from "../src/data/discovery";
import { equipmentData } from "../src/data/equipment";

const ids = equipmentData.map((item) => item.id);

describe("equipment discovery and quote context", () => {
  it("returns real catalogue models for every facility and environment", () => {
    for (const use of useCases) {
      for (const environment of ["pool", "sea"]) {
        const result = getStartingPoints(use.id, environment);
        expect(result.products.length).toBeGreaterThan(0);
        expect(result.products.every((id) => ids.includes(id))).toBe(true);
      }
    }
    expect(getStartingPoints("resort", "sea").products).toEqual([
      "poolbiking-ibiza",
    ]);
  });
  it("offers real equipment in each requested family and avoids pool-only sea recommendations", () => {
    for (const use of useCases) {
      for (const family of ["Bikes", "Platforms", "Accessories"]) {
        const result = getStartingPoints(use.id, "pool", family);
        expect(result.products.length).toBeGreaterThan(0);
        for (const id of result.products)
          expect(equipmentData.find((item) => item.id === id)?.category).toBe(
            family,
          );
      }
    }
    expect(getStartingPoints("senior", "pool", "Accessories").interest).toBe(
      "Senior living / care residence",
    );
    expect(getStartingPoints("resort", "sea", "Platforms").products).toEqual(
      [],
    );
    expect(getStartingPoints("resort", "sea", "Accessories").products).toEqual(
      [],
    );
  });
  it("falls back gracefully for an unknown facility", () => {
    expect(getStartingPoints("unknown", "pool")).toEqual(useCases[0]);
  });
  it("ignores corrupt, deleted and duplicate saved selections and caps them at three", () => {
    expect(sanitizeProductIds({ id: ids[0] }, ids)).toEqual([]);
    expect(
      sanitizeProductIds([ids[0], ids[0], "removed-model", null, ...ids], ids),
    ).toEqual(ids.slice(0, 3));
  });
  it("encodes shortlist and facility without losing special characters", () => {
    const url = buildInquiryUrl(ids.slice(0, 2), "Hotel / resort");
    const params = new URLSearchParams(url.split("?")[1]);
    expect(params.get("interest")).toBe("Hotel / resort");
    expect(params.get("products")).toBe(ids.slice(0, 2).join(","));
  });
  it("keeps selected models, quantities and customer text in the prepared inquiry", () => {
    const body = buildInquiryBody(
      {
        name: "Test & Co",
        email: "test@example.com",
        quantity: "3–5",
        message: "Pool in Curaçao\nQuestion about delivery.",
      },
      ["Poolbiking One Plus"],
    );
    expect(body).toContain("Equipment: Poolbiking One Plus");
    expect(body).toContain("Approximate units: 3–5");
    expect(body).toContain("Pool in Curaçao\nQuestion about delivery.");
    expect(body).toContain("Phone: Not provided");
  });
});
