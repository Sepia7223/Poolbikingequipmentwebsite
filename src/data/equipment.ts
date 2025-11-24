import berlinImg from "../content/Poolbiking New Pictures/poolbiking_berlin2021.jpg.jpeg";
import one20Img from "../content/Poolbiking New Pictures/poolbiking_one2015_aquabike.jpg.jpeg";
import onePlusImg from "../content/Poolbiking New Pictures/poolbiking_oneplus2015_aquabike.jpg.jpeg";
import evolutionImg from "../content/Poolbiking New Pictures/poolbiking_evolution40_aquabike.jpg.jpeg";
import ibizaImg from "../content/Poolbiking New Pictures/poolbiking_ibiza40_aquabike.jpg.jpeg";
import coreImg from "../content/Poolbiking New Pictures/poolbiking_core_aquabiking_aquabike.jpg.jpeg";
import monacoImg from "../content/Poolbiking New Pictures/poolbiking_monaco.jpg.jpeg";
import orbitalImg from "../content/Poolbiking New Pictures/poolbiking_orbital_aquabiking.jpg.jpeg";
import parisImg from "../content/Poolbiking New Pictures/poolbiking_paris40_aquabike.jpg.jpeg";
import tenerifeImg from "../content/Poolbiking New Pictures/poolbiking_tenerife2016_aquabike.jpg.jpeg";
import veracruzImg from "../content/Poolbiking New Pictures/poolbiking_veracruz40_aquabike.jpg.jpeg";
import poolmatImg from "../content/Poolbiking New Pictures/poolmat.jpg.jpeg";
import poolJumpingImg from "../content/Poolbiking New Pictures/pooljumping.jpg.jpeg";
import poolbagImg from "../content/Poolbiking New Pictures/poolbag_20_q.jpg.jpeg";
import poolfitBasicImg from "../content/Poolbiking New Pictures/poolfit-basic.jpg.jpeg";
import poolfitPremiumImg from "../content/Poolbiking New Pictures/poolfit-premium.jpg.jpeg";
import acapulcoImg from "../content/Poolbiking New Pictures/pooltrekking_acapulco.jpg.jpeg";
import medicalMiamiImg from "../content/Poolbiking New Pictures/pooltrekking_medical-miami_2020.jpg.jpeg";
import miamiImg from "../content/Poolbiking New Pictures/pooltrekking_miami.jpg.jpeg";
import meta400Img from "../content/Poolbiking New Pictures/meta-400.jpg.jpeg";
import metaPkImg from "../content/Poolbiking New Pictures/meta_pk.jpeg";
import stepImg from "../content/Poolbiking New Pictures/step_q.jpg.jpeg";
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
  warrantyYears?: number;
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
    inStock: true,
    warrantyYears: 4
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
    inStock: true,
    warrantyYears: 4
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
    inStock: true,
    warrantyYears: 4
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
    inStock: true,
    warrantyYears: 7
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
    inStock: true,
    warrantyYears: 4
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
    inStock: true,
    warrantyYears: 2
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
  },
  {
    id: "poolbiking-monaco",
    name: "Poolbiking Monaco",
    category: "Bikes",
    shortDescription: "High-intensity aquabike with double-adjustable saddle and HIT pedals.",
    description: "Heavy-duty aquabike built from AISI 316L with Perfect Geometry, HIT pedals and XXL 42 mm bearings for smooth, progressive resistance.",
    image: monacoImg,
    features: [
      "Double-adjustable saddle to dial rider fit",
      "HIT pedals with TM7LF antibacterial elastomer",
      "XXL 42 mm INOX bearings for fluid motion",
      "Perfect Geometry posture support",
      "Stainless AISI 316L construction"
    ],
    specifications: {
      weight: "30 kg (equipment); 32 kg packaged",
      dimensions: "820x195x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Rider height flexible via dual saddle travel",
      resistanceLevels: "Exponential progressive resistance via HIT pedals"
    },
    inStock: true,
    warrantyYears: 2
  },
  {
    id: "poolbiking-orbital",
    name: "Poolbiking Orbital",
    category: "Bikes",
    shortDescription: "Elliptical aquatrainer with sacrificial anode and high-resistance plates.",
    description: "Low-impact elliptical movement in water with AISI 316L frame, sacrificial anode, plates for extra drag and TM7LF antibacterial pedals.",
    image: orbitalImg,
    features: [
      "Elliptical stride for low-impact cardio",
      "Plates add resistance for harder sessions",
      "Sacrificial anode for corrosion protection",
      "TM7LF antibacterial elastomer pedals",
      "XXL 42 mm INOX bearings for smooth drive"
    ],
    specifications: {
      weight: "27 kg (equipment); 29 kg packaged",
      dimensions: "1000x180x1250 mm package",
      material: "AISI 316L stainless steel with sacrificial anode",
      maxUserWeight: "Optimized for varied rider heights",
      resistanceLevels: "Exponential progressive resistance with plate drag"
    },
    inStock: true,
    warrantyYears: 2
  },
  {
    id: "poolbiking-paris",
    name: "Poolbiking Paris",
    category: "Bikes",
    shortDescription: "Resistance-first aquabike with blades and HIT pedals.",
    description: "Compact, high-resistance aquabike featuring blades for added drag, HIT pedals and TM7LF antibacterial elastomer for intense sessions.",
    image: parisImg,
    features: [
      "Blades to increase water resistance",
      "HIT pedals with TM7LF antibacterial elastomer",
      "Four XXL INOX bearings for stability",
      "Perfect Geometry for rider posture",
      "AISI 316L stainless steel build"
    ],
    specifications: {
      weight: "20 kg (equipment); 22 kg packaged",
      dimensions: "820x195x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Fits a wide rider height range",
      resistanceLevels: "Blade-enhanced progressive resistance"
    },
    inStock: true,
    warrantyYears: 7
  },
  {
    id: "poolbiking-tenerife",
    name: "Poolbiking Tenerife",
    category: "Bikes",
    shortDescription: "Hotel-ready aquabike with suction stability and branding plate.",
    description: "Special model for resorts with suction-cup silentblocks, promotional faceplate option and Perfect Geometry for stable rides.",
    image: tenerifeImg,
    features: [
      "Silentblock 65 mm suction cups for stability",
      "Optional promotional faceplate",
      "TM7LF antibacterial elastomer pedals",
      "Perfect Geometry for ergonomic posture",
      "AISI 316L stainless steel frame"
    ],
    specifications: {
      weight: "19.4 kg (equipment); 21.4 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Designed for varied rider heights",
      resistanceLevels: "Exponential progressive resistance"
    },
    inStock: true,
    warrantyYears: 4
  },
  {
    id: "poolbiking-veracruz",
    name: "Poolbiking Veracruz",
    category: "Bikes",
    shortDescription: "Ultra-strong basic aquabike with 7-year structure warranty.",
    description: "Reinforced AISI 316L aquabike with silentblock suction stability, TM7LF antibacterial pedals and XXL bearings for smooth, durable workouts.",
    image: veracruzImg,
    features: [
      "Indestructible structure with extended warranty",
      "Silentblock 65 mm suction cups for grip",
      "TM7LF antibacterial elastomer pedals",
      "XXL 42 mm INOX bearings",
      "Perfect Geometry for balanced posture"
    ],
    specifications: {
      weight: "18.5 kg (equipment); 20.5 kg packaged",
      dimensions: "820x170x900 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Built for intensive public-pool use",
      resistanceLevels: "Exponential progressive resistance"
    },
    inStock: true,
    warrantyYears: 7
  },
  {
    id: "poolfit-basic",
    name: "Poolfit Basic",
    category: "Platforms",
    shortDescription: "Modular aquatic strength station with dual anchors and wheels.",
    description: "Mobile stainless training frame for pull-ups, dips, push-ups and band work; easy to roll, anchor and adapt to pool layouts.",
    image: poolfitBasicImg,
    features: [
      "AISI 316L frame with dual anchor configuration",
      "4 transport wheels for easy positioning",
      "Quick closures to swap anchors and tools",
      "Supports simultaneous training for up to 3 users",
      "Modular layout for varied pool lanes"
    ],
    specifications: {
      weight: "28 kg (equipment)",
      dimensions: "Modular frame adaptable to pool lane",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Supports multiple users (strength station)",
      resistanceLevels: "Bodyweight and band resistance (user-defined)"
    },
    inStock: true,
    warrantyYears: 2
  },
  {
    id: "poolfit-premium",
    name: "Poolfit Premium",
    category: "Platforms",
    shortDescription: "Expanded Poolfit with added stations for multi-user strength work.",
    description: "Premium configuration of the modular Poolfit frame with more stations and hardware for group aquatic strength and conditioning.",
    image: poolfitPremiumImg,
    features: [
      "Additional stations for dips, pull-ups and band work",
      "AISI 316L construction with quick anchor swaps",
      "4 transport wheels for fast deployment",
      "Configurable anchors for client-specific setups",
      "Supports three simultaneous users"
    ],
    specifications: {
      weight: "39 kg (equipment)",
      dimensions: "Modular frame adaptable to pool lane",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Supports multiple users (strength station)",
      resistanceLevels: "Bodyweight and band resistance (user-defined)"
    },
    inStock: true,
    warrantyYears: 2
  },
  {
    id: "pooltrekking-acapulco",
    name: "Pooltrekking Acapulco",
    category: "Platforms",
    shortDescription: "Professional aquatic treadmill with top grip and foldable frame.",
    description: "Zero-impact treadmill with antibacterial belt, front stability bar, suction-cup feet and foldable design for easy storage.",
    image: acapulcoImg,
    features: [
      "Antibacterial belt with top-grip surface",
      "Front bar for balance and stability",
      "Foldable frame for compact storage",
      "Silentblock 65 mm suction cups for grip",
      "Electropolished AISI 316L construction"
    ],
    specifications: {
      weight: "33.4 kg (equipment); 35.4 kg packaged",
      dimensions: "710x200x1250 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Supports typical fitness-center users",
      resistanceLevels: "Self-paced belt resistance in water"
    },
    inStock: true,
    warrantyYears: 4
  },
  {
    id: "pooltrekking-medical",
    name: "Pooltrekking Medical",
    category: "Platforms",
    shortDescription: "Double-grip aquatic treadmill for rehab and balance training.",
    description: "Rehab-focused treadmill with dual side bars, antibacterial belt, suction-cup stability and electropolished AISI 316L frame.",
    image: medicalMiamiImg,
    features: [
      "Dual side bars for secure support",
      "Antibacterial belt for hygienic use",
      "Silentblock 65 mm suction cups for stability",
      "Easy assembly and compact footprint",
      "Electropolished AISI 316L frame"
    ],
    specifications: {
      weight: "29.3 kg (equipment); 31.3 kg packaged",
      dimensions: "710x200x1250 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Supports rehab and fitness users",
      resistanceLevels: "Self-paced belt resistance in water"
    },
    inStock: true,
    warrantyYears: 4
  },
  {
    id: "pooltrekking-miami",
    name: "Pooltrekking Miami",
    category: "Platforms",
    shortDescription: "Compact aquatic treadmill with front grip for balance.",
    description: "Space-saving treadmill with antibacterial belt, front stability bar, suction-cup feet and electropolished stainless construction.",
    image: miamiImg,
    features: [
      "Front bar for added balance",
      "Antibacterial belt for hygienic running",
      "Silentblock 65 mm suction cups for grip",
      "Easy-to-store compact footprint",
      "Electropolished AISI 316L build"
    ],
    specifications: {
      weight: "26.3 kg (equipment); 28.3 kg packaged",
      dimensions: "715x155x1150 mm package",
      material: "AISI 316L stainless steel",
      maxUserWeight: "Supports typical pool users",
      resistanceLevels: "Self-paced belt resistance in water"
    },
    inStock: true,
    warrantyYears: 4
  },
  {
    id: "meta-400",
    name: "Meta 400 Pool Lift",
    category: "Accessories",
    shortDescription: "Battery-powered pool lift with 1 m travel and no ground anchors.",
    description: "Portable stainless battery elevator with 25-30 service autonomy, seat belt, and 120/150 kg capacity without requiring floor anchoring.",
    image: meta400Img,
    features: [
      "Battery-powered lift with spare battery included",
      "No ground anchoring required for installation",
      "Seat belt and smooth <0.1 m/s movement",
      "Up to 120-150 kg load capacity",
      "Stainless AISI 316 construction"
    ],
    specifications: {
      weight: "200 kg (equipment); 300 kg packaged",
      dimensions: "Approx. 1 m vertical seat travel",
      material: "AISI 316 stainless steel",
      maxUserWeight: "Load capacity 120-150 kg",
      resistanceLevels: "Motorized lift speed <0.1 m/s"
    },
    inStock: true,
    warrantyYears: 5
  },
  {
    id: "meta-pk",
    name: "Meta PK Pool Lift",
    category: "Accessories",
    shortDescription: "Hydraulic pool lift powered by water pressure with 170° turn.",
    description: "Hydraulic stainless lift operating at 3.5-5.5 bar with dual control valves, 1.06 m stroke, 150 kg capacity and compact storage height.",
    image: metaPkImg,
    features: [
      "Hydraulic operation via 3.5-5.5 bar water pressure",
      "Dual control valves for poolside and in-pool use",
      "170° turn radius with 700 mm swing",
      "Compact 1.63 m storage height with transport wheel",
      "AISI 316 stainless build for corrosion resistance"
    ],
    specifications: {
      weight: "38 kg (equipment); 49 kg packaged",
      dimensions: "1.06 m vertical stroke; 700 mm turn radius",
      material: "AISI 316 stainless steel",
      maxUserWeight: "Load capacity up to 150 kg",
      resistanceLevels: "Hydraulic lift motion (pressure-dependent)"
    },
    inStock: true,
    warrantyYears: 3
  },
  {
    id: "pool-step",
    name: "Poolbiking Step",
    category: "Accessories",
    shortDescription: "Sturdy polypropylene pool step with fast-fill design.",
    description: "Compact underwater step with quick-fill holes, 8 suction cups and a wide base for stability in 110-130 cm pool depths.",
    image: stepImg,
    features: [
      "Polypropylene build designed for pool use",
      "Eight suction cups for solid floor grip",
      "Quick-fill holes for rapid water entry/exit",
      "Compact size for easy storage and transport",
      "Optimized for 110-130 cm pool depths"
    ],
    specifications: {
      weight: "4.3 kg (equipment); 6.3 kg packaged",
      dimensions: "400x500x750 mm package",
      material: "Polypropylene",
      maxUserWeight: "Sized for standard aquatic step training",
      resistanceLevels: "Bodyweight step resistance"
    },
    inStock: true
  }
];

export const categories = ["All", "Bikes", "Platforms", "Accessories"];
