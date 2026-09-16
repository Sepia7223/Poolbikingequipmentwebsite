/** Editorial starting points from the existing catalogue, not a pool-suitability assessment. */
export const useCases = [
  {
    id: "resort",
    label: "Hotels & resorts",
    interest: "Hotel / resort",
    description: "Choose equipment for active guest experiences.",
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
    id: "senior",
    label: "Senior living",
    interest: "Senior living / care residence",
    description: "Explore equipment for supported cycling and walking.",
    products: ["pooltrekking-medical", "poolbiking-one-plus"],
    reason:
      "Explore support bars and adjustable seating with your care team. Suitability, access and supervision should be reviewed for each resident.",
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

const additionalEquipment: Record<string, Record<string, string[]>> = {
  resort: {
    Platforms: ["poolmat-set", "poolfit-basic"],
    Accessories: ["pooljumping-trampoline", "pool-step"],
  },
  fitness: {
    Platforms: ["poolfit-premium", "poolmat-set"],
    Accessories: ["poolbag", "poolball"],
  },
  rehabilitation: {
    Platforms: ["pooltrekking-medical", "pooltrekking-miami"],
    Accessories: ["meta-400", "pool-step"],
  },
  senior: {
    Platforms: ["pooltrekking-medical", "pooltrekking-miami"],
    Accessories: ["meta-400", "meta-pk"],
  },
  private: {
    Platforms: ["poolmat-set", "pooltrekking-miami"],
    Accessories: ["pool-step", "poolbag"],
  },
};
export function getStartingPoints(
  use: string,
  environment: string,
  family = "Recommended",
) {
  const selected = useCases.find((item) => item.id === use) ?? useCases[0];
  if (environment === "sea" && family !== "Recommended" && family !== "Bikes") {
    return {
      ...selected,
      products: [] as string[],
      description: "Let’s check your waterfront setup.",
      reason:
        "These platforms and accessories are pool options. Contact us to check suitability for a beach or sea installation.",
    };
  }
  if (environment === "pool" && family !== "Recommended") {
    const products =
      family === "Bikes"
        ? selected.id === "rehabilitation" || selected.id === "senior"
          ? ["poolbiking-one-plus", "poolbiking-one-2-0"]
          : [...selected.products]
        : (additionalEquipment[selected.id][family] ?? []);
    return {
      ...selected,
      products,
      reason:
        family === "Accessories"
          ? "Complete the setup with training or pool-access equipment. We’ll review compatibility, installation and user needs with you."
          : family === "Platforms"
            ? "Explore floating training platforms or aquatic walking equipment for your program. Confirm pool depth and supervision needs with your team."
            : selected.reason,
    };
  }
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
