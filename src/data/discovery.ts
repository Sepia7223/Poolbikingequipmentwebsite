/** Editorial starting points from the existing catalogue, not a pool-suitability assessment. */
export const useCases = [
  {
    id: "resort",
    label: "Hotels & resorts",
    interest: "Hotel / resort",
    description: "Give guests a new reason to get in the water.",
    products: ["poolbiking-tenerife", "poolbiking-one-plus"],
    reason:
      "Start with resort-focused stability or a bike with extra saddle adjustment for different guests.",
  },
  {
    id: "fitness",
    label: "Fitness facilities",
    interest: "Fitness facility",
    description: "Bring a different kind of energy to your classes.",
    products: ["poolbiking-evolution", "poolbiking-paris"],
    reason:
      "Compare a reinforced frame with a model that adds blades for more water resistance.",
  },
  {
    id: "rehabilitation",
    label: "Rehabilitation",
    interest: "Rehabilitation",
    description: "Explore equipment for supervised aquatic movement.",
    products: ["pooltrekking-medical", "pooltrekking-miami"],
    reason:
      "Compare aquatic treadmills with different support configurations. Your clinician should confirm suitability for the intended program.",
  },
  {
    id: "private",
    label: "Private pools",
    interest: "Private facility",
    description: "Make room for movement in your everyday routine.",
    products: ["poolbiking-one-2-0", "poolbiking-one-plus"],
    reason:
      "Compare the straightforward One 2.0 with the additional horizontal saddle adjustment of the One Plus.",
  },
] as const;

export const MAX_COMPARE = 3;

export function sanitizeProductIds(
  value: unknown,
  validIds: readonly string[],
): string[] {
  if (!Array.isArray(value)) return [];
  return [
    ...new Set(
      value.filter(
        (id): id is string => typeof id === "string" && validIds.includes(id),
      ),
    ),
  ].slice(0, MAX_COMPARE);
}

export function getStartingPoints(use: string, environment: string) {
  const selected = useCases.find((item) => item.id === use) ?? useCases[0];
  if (environment === "sea") {
    return {
      ...selected,
      description: "Take the experience to the waterfront.",
      products: ["poolbiking-ibiza"],
      reason:
        "The Ibiza is the catalogue’s beach and sea model, with transport wheels and a sacrificial anode. Confirm the site conditions with us before choosing equipment.",
    };
  }
  return selected;
}

export function buildInquiryUrl(
  ids: readonly string[],
  interest = "Product purchase",
) {
  const params = new URLSearchParams({ interest });
  if (ids.length) params.set("products", ids.slice(0, MAX_COMPARE).join(","));
  return `/contact?${params.toString()}`;
}

export function buildInquiryBody(
  fields: Record<string, string>,
  products: readonly string[],
) {
  return [
    `Name: ${fields.name || ""}`,
    `Email: ${fields.email || ""}`,
    `Phone: ${fields.phone || "Not provided"}`,
    `Company / facility: ${fields.company || "Not provided"}`,
    `Island / country: ${fields.location || "Not provided"}`,
    `Interest: ${fields.interest || ""}`,
    `Equipment: ${products.length ? products.join(", ") : "Please help me choose"}`,
    `Approximate units: ${fields.quantity || "Not sure yet"}`,
    "",
    fields.message || "",
  ].join("\n");
}
