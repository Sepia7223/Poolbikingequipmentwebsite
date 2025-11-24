import berlinImg from "../content/Poolbiking New Pictures/poolbiking_berlin2021.jpg.jpeg";
import one20Img from "../content/Poolbiking New Pictures/poolbiking_one2015_aquabike.jpg.jpeg";
import onePlusImg from "../content/Poolbiking New Pictures/poolbiking_oneplus2015_aquabike.jpg.jpeg";
import evolutionImg from "../content/Poolbiking New Pictures/poolbiking_evolution40_aquabike.jpg.jpeg";
import ibizaImg from "../content/Poolbiking New Pictures/poolbiking_ibiza40_aquabike.jpg.jpeg";
import coreImg from "../content/Poolbiking New Pictures/poolbiking_core_aquabiking_aquabike.jpg.jpeg";
import poolmatImg from "../content/Poolbiking New Pictures/poolmat.jpg.jpeg";
import poolJumpingImg from "../content/Poolbiking New Pictures/pooljumping.jpg.jpeg";
import poolbagImg from "../content/Poolbiking New Pictures/poolbag_20_q.jpg.jpeg";
import poolballImg from "../content/Pictures Poolbiking Equipment/poolball.jpg";

export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price?: number;
  rentalPrice?: {
    daily?: number;
    weekly?: number;
    monthly?: number;
  };
  image: string;
  features: string[];
  specifications: {
    weight: string;
    dimensions: string;
    material: string;
    maxUserWeight: string;
    resistanceLevels: string;
  };
  inStock: boolean;
}

export const equipmentData: Equipment[] = [
  {
    id: "poolbiking-berlin",
    name: "Poolbiking Berlin",
    category: "Bikes",
    shortDescription: "Anti-vandal aquabike with anchoring kit for public pools.",
    description: "Anti-vandalism aquabike with ground anchoring plate for secure public pool installations, built from AISI 316L stainless steel with Perfect Geometry for a balanced ride.",
    image: berlinImg,
    features: [
      "Anti-vandalism kit with exercise plate for anchoring",
      "Ground anchorage for public pools and water parks",
      "Antibacterial pedals with stainless-steel axles",
      "Adjustable saddle and handlebars for varied heights",
      "65 mm supports for extra stability"
    ],
    specifications: {
      weight: "18.4 kg (equipment); 20.4 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Designed for public-pool riders (1.50-2.00 m)",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolbiking-one-2-0",
    name: "Poolbiking One 2.0",
    category: "Bikes",
    shortDescription: "Basic professional aquabike with Perfect Geometry.",
    description: "Full-body cardio aquabike that keeps riders from 1.50 m to 2.00 m in correct posture without complex adjustments.",
    image: one20Img,
    features: [
      "Perfect Geometry for balanced pedalling",
      "Antibacterial medical-grade pedals",
      "Stainless-steel axles resist corrosion",
      "Vertical saddle and handlebar adjustment",
      "65 mm wide supports for stability"
    ],
    specifications: {
      weight: "18.7 kg; 20.7 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Rider height 1.50-2.00 m",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolbiking-one-plus",
    name: "Poolbiking One Plus",
    category: "Bikes",
    shortDescription: "Adds horizontal saddle adjustment for precise fit.",
    description: "Durable aquabike for hotels, gyms and personal use with both vertical and horizontal saddle travel plus Perfect Geometry posture.",
    image: onePlusImg,
    features: [
      "Vertical and horizontal saddle adjustment",
      "Antibacterial pedals with stainless-steel axles",
      "Height-adjustable handlebars",
      "65 mm supports for a stable base",
      "Perfect Geometry for ergonomic posture"
    ],
    specifications: {
      weight: "19 kg; 21 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Rider height 1.50-2.00 m",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolbiking-evolution",
    name: "Poolbiking Evolution",
    category: "Bikes",
    shortDescription: "Reinforced basic model with double-saddle adjustment.",
    description: "Ultra-strong aquabike with reinforced frame, bottle holder and dual saddle adjustment for heavier users and high-intensity workouts.",
    image: evolutionImg,
    features: [
      "Reinforced frame for heavy-duty use",
      "Vertical and horizontal saddle adjustment",
      "Bottle holder for hydration",
      "Antibacterial pedals and stainless-steel axles",
      "65 mm supports and adjustable bars"
    ],
    specifications: {
      weight: "20 kg; 22 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel (reinforced)",
      maxUserWeight: "Reinforced for heavy-duty users",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolbiking-ibiza",
    name: "Poolbiking Ibiza",
    category: "Bikes",
    shortDescription: "Beach and sea-ready aquabike with transport wheels.",
    description: "Saltwater-ready model with large wheels for sand transport and a sacrificial anode to protect the stainless frame in beach settings.",
    image: ibizaImg,
    features: [
      "Large transport wheels for moving over sand",
      "Sacrificial anode for saltwater protection",
      "Antibacterial pedals and stainless-steel axles",
      "Adjustable saddle/handlebars with Perfect Geometry",
      "65 mm supports for stable footing"
    ],
    specifications: {
      weight: "25.5 kg; 27.5 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel with sacrificial anode",
      maxUserWeight: "Beach/sea use; rider heights 1.50-2.00 m",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolbiking-core",
    name: "Poolbiking Core",
    category: "Bikes",
    shortDescription: "Upright core and balance-focused aquabike.",
    description: "Lightweight aquabike for standing, posture-correcting core work with a tall adjustable handlebar and stable base.",
    image: coreImg,
    features: [
      "Standing posture for core and balance training",
      "Tall, height-adjustable handlebar",
      "Antibacterial pedals with stainless-steel axles",
      "Lightweight frame that is easy to move",
      "65 mm supports for stability on pool floors"
    ],
    specifications: {
      weight: "14.8 kg; 16.8 kg packaged",
      dimensions: "615x140x890 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Upright/balance training (height-flexible)",
      resistanceLevels: "Progressive pedal drag"
    },
    inStock: true
  },
  {
    id: "poolmat-set",
    name: "Poolmat Set",
    category: "Platforms",
    shortDescription: "Modular floating platform for Pilates, yoga and functional work.",
    description: "Professional floating mat built from ultra-reinforced double-layer polymer that can link up to ten units around a base for group sessions.",
    image: poolmatImg,
    features: [
      "Ultra-reinforced double-layer polymer construction",
      "Bottom-mounted inflation valve to protect from sun",
      "Link up to ten mats around a central base",
      "Customisable surface for logos or branding"
    ],
    specifications: {
      weight: "13.8 kg; 15.8 kg packaged",
      dimensions: "460x200x1000 mm package",
      material: "Double-layer reinforced polymer with stitched mesh",
      maxUserWeight: "Modular platform (group-capable)",
      resistanceLevels: "Bodyweight / instability training"
    },
    inStock: true
  },
  {
    id: "pooljumping-trampoline",
    name: "Pooljumping Trampoline",
    category: "Accessories",
    shortDescription: "Hexagonal aquatic rebounder with support handlebar.",
    description: "Ultra-resistant aquatic trampoline with fixed hand-rail and individual tension cords per leg for balanced, smooth rebounds.",
    image: poolJumpingImg,
    features: [
      "Fixed exercise handlebar for secure support",
      "Individual tensioners on each leg for smooth bounce",
      "Detachable handlebar for compact storage",
      "Ultra-resistant frame for cardio and rehab"
    ],
    specifications: {
      weight: "10 kg; 12 kg packaged",
      dimensions: "1000x500x100 mm package",
      material: "Ultra-resistant frame with individual tension cords",
      maxUserWeight: "Aquatic rebound and balance training",
      resistanceLevels: "Elastic tensioners"
    },
    inStock: true
  },
  {
    id: "poolbag",
    name: "Poolbag",
    category: "Accessories",
    shortDescription: "Clear PVC training bag for push-pull water exercises.",
    description: "Fill with air or water to dial in resistance; available in 10 L standard and 20 L XL with multiple padded handles for varied grips.",
    image: poolbagImg,
    features: [
      "Fill with air or water to tune resistance",
      "Multiple padded handles for varied grips",
      "Standard 10 L and XL 20 L capacities",
      "Durable clear PVC construction"
    ],
    specifications: {
      weight: "1 kg (empty)",
      dimensions: "320x420x100 mm package",
      material: "Clear PVC with padded handles",
      maxUserWeight: "Fill-dependent: 10 L or 20 L XL capacity",
      resistanceLevels: "Water-fill adjustable"
    },
    inStock: true
  },
  {
    id: "poolball",
    name: "Poolball",
    category: "Accessories",
    shortDescription: "Spherical training bag with ergonomic dual handles.",
    description: "15 L spherical version of the Poolbag that lets users vary weight and instability by filling with water for functional and core training.",
    image: poolballImg,
    features: [
      "Spherical bag with two ergonomic padded handles",
      "Fill with water to increase weight and instability",
      "15 L capacity for functional training",
      "PVC construction with secure grips"
    ],
    specifications: {
      weight: "1 kg (empty)",
      dimensions: "320x420x100 mm package",
      material: "PVC with ergonomic handles",
      maxUserWeight: "Fill-dependent up to 15 L",
      resistanceLevels: "Water-fill adjustable"
    },
    inStock: true
  }
];

export const categories = ["All", "Bikes", "Platforms", "Accessories"];
