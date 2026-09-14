import warranty2 from "../content/Waranty Logo/garantia-2_en.svg";
import warranty3 from "../content/Waranty Logo/garantia-3_en.svg";
import warranty4 from "../content/Waranty Logo/garantia-4_en.svg";
import warranty5 from "../content/Waranty Logo/garantia-5_en.svg";
import warranty7 from "../content/Waranty Logo/garantia-7_en.svg";
import pedalSeal from "../content/Logo's/segell_pedal_230_en.png";
import perfectGeometry from "../content/Logo's/poolbiking_perfect_geometry.png";
import professionalEquipment from "../content/Logo's/poolbiking_professional_equipment.svg";
import progressiveResistance from "../content/Logo's/full_progressive_resistance.jpg";
import ultraStrong from "../content/Logo's/ultra_strong.svg";
import type { Equipment } from "./equipment";

export interface ProductBadge {
  title: string;
  copy: string;
  image: string;
}

export interface ProductAccessory {
  name: string;
  image: string;
  note: string;
}

export interface ProductPresentation {
  manufacturerPage?: string;
  accessories?: ProductAccessory[];
}

const warrantyImages: Record<number, string> = {
  2: warranty2,
  3: warranty3,
  4: warranty4,
  5: warranty5,
  7: warranty7,
};

const manufacturerAsset = (file: string) =>
  `https://www.poolbiking.com/common/docs/img/products/${file}`;

const accessories = {
  doubleSaddle: {
    name: "Double-adjustment saddle",
    image: manufacturerAsset("detall_sillin_oneplus.jpg"),
    note: "Adds horizontal saddle adjustment for a more precise rider fit.",
  },
  multiExerciseBar: {
    name: "Multi-exercise bar",
    image: manufacturerAsset("detall_barra_multiexercicis.jpg"),
    note: "Manufacturer-listed bar for additional upper-body exercise positions.",
  },
  bottleHolder: {
    name: "Bottle holder",
    image: manufacturerAsset("detall_portabido.jpg"),
    note: "Keeps hydration within reach during longer aquatic sessions.",
  },
  hitPedals: {
    name: "HIT pedals",
    image: manufacturerAsset("detall_logo-hit_en.png"),
    note: "Higher-resistance pedal option for more demanding training.",
  },
  biggerWheels: {
    name: "Bigger transport wheels",
    image: manufacturerAsset("detall_ibiza-rodes.jpg"),
    note: "Larger wheels simplify moving equipment around the pool or deck.",
  },
  sacrificialAnode: {
    name: "Sacrificial anode",
    image: manufacturerAsset("detall_anode.jpg"),
    note: "Additional corrosion protection for demanding water environments.",
  },
} satisfies Record<string, ProductAccessory>;

const ultraStrongModels = new Set([
  "poolbiking-evolution",
  "poolbiking-veracruz",
  "poolbiking-paris",
]);

export function getProductBadges(product: Equipment): ProductBadge[] {
  const badges: ProductBadge[] = [];

  if (product.warrantyYears && warrantyImages[product.warrantyYears]) {
    badges.push({
      title: `${product.warrantyYears}-year international warranty`,
      copy: "Warranty period listed for this model in the POOLBIKING product range.",
      image: warrantyImages[product.warrantyYears],
    });
  }

  if (product.category === "Bikes") {
    badges.push(
      {
        title: "Antibacterial pedal material",
        copy: "POOLBIKING specifies medical elastomer pedal material designed for barefoot aquatic use.",
        image: pedalSeal,
      },
      {
        title: "Perfect Geometry",
        copy: "Geometry developed around multiple rider heights to support consistent positioning in the water.",
        image: perfectGeometry,
      },
      {
        title: "Progressive water resistance",
        copy: "Pedalling resistance increases with speed, so the rider controls the training intensity.",
        image: progressiveResistance,
      },
    );
  } else {
    badges.push({
      title: "Professional aquatic equipment",
      copy: product.specifications.material.toLowerCase().includes("aisi")
        ? `Professional equipment using ${product.specifications.material}.`
        : "Part of POOLBIKING's professional aquatic training equipment range.",
      image: professionalEquipment,
    });
  }

  if (ultraStrongModels.has(product.id)) {
    badges.push({
      title: "Ultra-Strong range",
      copy: "Reinforced construction intended for intensive professional training.",
      image: ultraStrong,
    });
  }

  return badges;
}

export const productPresentation: Record<string, ProductPresentation> = {
  "poolbiking-one-2-0": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-one.html",
    accessories: [accessories.doubleSaddle, accessories.bottleHolder, accessories.hitPedals, accessories.biggerWheels],
  },
  "poolbiking-one-plus": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-one-plus.html",
    accessories: [accessories.multiExerciseBar, accessories.bottleHolder, accessories.hitPedals, accessories.biggerWheels],
  },
  "poolbiking-evolution": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-evolution.html",
    accessories: [accessories.hitPedals],
  },
  "poolbiking-berlin": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-berlin.html",
    accessories: [accessories.hitPedals],
  },
  "poolbiking-paris": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-paris.html",
    accessories: [accessories.doubleSaddle],
  },
  "poolbiking-core": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-core.html",
    accessories: [accessories.bottleHolder, accessories.biggerWheels],
  },
  "poolbiking-monaco": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-monaco.html",
    accessories: [accessories.multiExerciseBar, accessories.bottleHolder],
  },
  "poolbiking-orbital": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-orbital.html",
    accessories: [accessories.bottleHolder, accessories.sacrificialAnode, accessories.biggerWheels],
  },
  "poolbiking-tenerife": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-tenerife.html",
    accessories: [accessories.doubleSaddle, accessories.hitPedals, accessories.biggerWheels],
  },
  "poolbiking-ibiza": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-ibiza.html",
  },
  "poolbiking-veracruz": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolbiking-veracruz.html",
  },
  "poolmat-set": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolmat.html",
  },
  "pooljumping-trampoline": {
    manufacturerPage: "https://www.poolbiking.com/en/products/pooljumping.html",
  },
  "poolfit-basic": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolfit-basic.html",
  },
  "poolfit-premium": {
    manufacturerPage: "https://www.poolbiking.com/en/products/poolfit-premium.html",
  },
  "pooltrekking-acapulco": {
    manufacturerPage: "https://www.poolbiking.com/en/products/pooltrekking-acapulco.html",
  },
  "pooltrekking-medical": {
    manufacturerPage: "https://www.poolbiking.com/en/products/pooltrekking-medical.html",
  },
  "pooltrekking-miami": {
    manufacturerPage: "https://www.poolbiking.com/en/products/pooltrekking-miami.html",
  },
  "meta-400": {
    manufacturerPage: "https://www.poolbiking.com/en/products/elevator_meta-400.html",
  },
  "meta-pk": {
    manufacturerPage: "https://www.poolbiking.com/en/products/elevator_meta-pk.html",
  },
  "pool-step": {
    manufacturerPage: "https://www.poolbiking.com/en/products/step.html",
  },
};
