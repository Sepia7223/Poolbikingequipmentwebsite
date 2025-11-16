export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  rentalPrice: {
    daily: number;
    weekly: number;
    monthly: number;
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
    id: "aquacycle-classic",
    name: "AquaCycle Classic",
    category: "Standard",
    shortDescription: "Our standard poolbike, perfect for group classes",
    description: "The AquaCycle Classic is our most popular model, designed for versatility and durability. Perfect for fitness centers and group classes.",
    price: 2500,
    rentalPrice: { daily: 50, weekly: 300, monthly: 1000 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Adjustable resistance levels",
      "Ergonomic seat design",
      "Corrosion-resistant frame",
      "Non-slip pedals",
      "Easy height adjustment"
    ],
    specifications: {
      weight: "25 kg",
      dimensions: "120 x 60 x 140 cm",
      material: "Stainless steel",
      maxUserWeight: "150 kg",
      resistanceLevels: "8 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-pro",
    name: "AquaCycle Pro",
    category: "Premium",
    shortDescription: "Premium model with advanced features",
    description: "Our flagship model featuring digital resistance control and performance tracking for serious athletes.",
    price: 4200,
    rentalPrice: { daily: 80, weekly: 500, monthly: 1800 },
    image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Digital resistance control",
      "Performance tracking display",
      "Premium cushioned seat",
      "Customizable handlebar positions",
      "Bluetooth connectivity"
    ],
    specifications: {
      weight: "30 kg",
      dimensions: "125 x 65 x 145 cm",
      material: "Aircraft-grade aluminum",
      maxUserWeight: "180 kg",
      resistanceLevels: "12 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-rehab",
    name: "AquaCycle Rehab",
    category: "Therapeutic",
    shortDescription: "Designed for rehabilitation and recovery",
    description: "Therapeutic model with extra stability features, perfect for physical therapy and rehabilitation programs.",
    price: 3500,
    rentalPrice: { daily: 70, weekly: 420, monthly: 1500 },
    image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Extra stability features",
      "Low-entry design",
      "Gentle resistance options",
      "Medical-grade construction",
      "Adjustable support rails"
    ],
    specifications: {
      weight: "28 kg",
      dimensions: "122 x 70 x 135 cm",
      material: "Medical-grade stainless steel",
      maxUserWeight: "160 kg",
      resistanceLevels: "6 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-elite",
    name: "AquaCycle Elite",
    category: "Premium",
    shortDescription: "Top-of-the-line performance bike",
    description: "Ultimate performance bike with advanced biomechanics and smart technology integration.",
    price: 5500,
    rentalPrice: { daily: 100, weekly: 650, monthly: 2300 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Smart app integration",
      "AI-powered workout tracking",
      "Premium ergonomic design",
      "Advanced resistance system",
      "Virtual coaching compatible"
    ],
    specifications: {
      weight: "32 kg",
      dimensions: "128 x 68 x 148 cm",
      material: "Carbon fiber composite",
      maxUserWeight: "200 kg",
      resistanceLevels: "16 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-compact",
    name: "AquaCycle Compact",
    category: "Standard",
    shortDescription: "Space-saving design for smaller pools",
    description: "Compact model perfect for home pools and smaller aquatic facilities without compromising on features.",
    price: 2200,
    rentalPrice: { daily: 45, weekly: 280, monthly: 950 },
    image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Space-efficient design",
      "Foldable for storage",
      "Full resistance range",
      "Lightweight construction",
      "Easy transport wheels"
    ],
    specifications: {
      weight: "22 kg",
      dimensions: "110 x 55 x 135 cm",
      material: "Aluminum alloy",
      maxUserWeight: "140 kg",
      resistanceLevels: "8 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-studio",
    name: "AquaCycle Studio",
    category: "Commercial",
    shortDescription: "Built for high-intensity studio classes",
    description: "Commercial-grade bike designed for intensive daily use in fitness studios and gyms.",
    price: 3800,
    rentalPrice: { daily: 75, weekly: 480, monthly: 1700 },
    image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Heavy-duty construction",
      "Quick-adjust seat system",
      "Studio-grade pedals",
      "Enhanced stability",
      "Commercial warranty"
    ],
    specifications: {
      weight: "35 kg",
      dimensions: "125 x 65 x 145 cm",
      material: "Industrial stainless steel",
      maxUserWeight: "180 kg",
      resistanceLevels: "10 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-senior",
    name: "AquaCycle Senior",
    category: "Therapeutic",
    shortDescription: "Designed for senior fitness programs",
    description: "Gentle, easy-to-use design perfect for senior fitness and low-impact exercise programs.",
    price: 2800,
    rentalPrice: { daily: 55, weekly: 350, monthly: 1200 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Extra-wide seat",
      "Low step-over height",
      "Large grip handles",
      "Smooth resistance",
      "Safety-first design"
    ],
    specifications: {
      weight: "26 kg",
      dimensions: "118 x 68 x 130 cm",
      material: "Powder-coated steel",
      maxUserWeight: "150 kg",
      resistanceLevels: "5 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-sport",
    name: "AquaCycle Sport",
    category: "Standard",
    shortDescription: "Athletic performance focused design",
    description: "Sport-oriented model for athletes and fitness enthusiasts seeking maximum performance.",
    price: 3200,
    rentalPrice: { daily: 65, weekly: 400, monthly: 1400 },
    image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Racing-style seat",
      "Performance pedals",
      "High resistance range",
      "Aerodynamic design",
      "Competition-ready"
    ],
    specifications: {
      weight: "27 kg",
      dimensions: "125 x 60 x 145 cm",
      material: "Titanium alloy",
      maxUserWeight: "170 kg",
      resistanceLevels: "12 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-luxury",
    name: "AquaCycle Luxury",
    category: "Premium",
    shortDescription: "Premium comfort and style",
    description: "Luxury model combining superior comfort with elegant design for upscale facilities.",
    price: 6200,
    rentalPrice: { daily: 110, weekly: 700, monthly: 2500 },
    image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Leather seat option",
      "Chrome finish",
      "Touch screen display",
      "Premium materials",
      "Designer aesthetics"
    ],
    specifications: {
      weight: "34 kg",
      dimensions: "130 x 70 x 150 cm",
      material: "Polished stainless steel",
      maxUserWeight: "190 kg",
      resistanceLevels: "14 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-junior",
    name: "AquaCycle Junior",
    category: "Youth",
    shortDescription: "Designed for young athletes",
    description: "Youth-sized model perfect for junior fitness programs and swim team training.",
    price: 1800,
    rentalPrice: { daily: 40, weekly: 250, monthly: 850 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Youth-sized frame",
      "Adjustable height range",
      "Safety features",
      "Bright color options",
      "Durable construction"
    ],
    specifications: {
      weight: "18 kg",
      dimensions: "100 x 50 x 120 cm",
      material: "Aluminum",
      maxUserWeight: "80 kg",
      resistanceLevels: "6 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-hybrid",
    name: "AquaCycle Hybrid",
    category: "Standard",
    shortDescription: "Versatile multi-use design",
    description: "Hybrid model suitable for both shallow and deep water use with adjustable configurations.",
    price: 3400,
    rentalPrice: { daily: 68, weekly: 420, monthly: 1500 },
    image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Adjustable depth settings",
      "Multi-position handlebar",
      "Versatile resistance",
      "All-terrain wheels",
      "Modular design"
    ],
    specifications: {
      weight: "29 kg",
      dimensions: "122 x 62 x 140 cm",
      material: "Hybrid composite",
      maxUserWeight: "165 kg",
      resistanceLevels: "10 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-endurance",
    name: "AquaCycle Endurance",
    category: "Commercial",
    shortDescription: "Built for marathon training",
    description: "Endurance-focused model designed for long training sessions and serious athletes.",
    price: 4500,
    rentalPrice: { daily: 85, weekly: 550, monthly: 1950 },
    image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Ultra-comfortable seat",
      "Extended handlebar grips",
      "Smooth resistance",
      "Endurance pedal system",
      "Fatigue-reducing design"
    ],
    specifications: {
      weight: "31 kg",
      dimensions: "126 x 64 x 144 cm",
      material: "Chromoly steel",
      maxUserWeight: "185 kg",
      resistanceLevels: "15 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-balance",
    name: "AquaCycle Balance",
    category: "Therapeutic",
    shortDescription: "Focus on stability and balance training",
    description: "Specialized model for balance training and core strengthening in aquatic therapy.",
    price: 3100,
    rentalPrice: { daily: 62, weekly: 390, monthly: 1350 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Stability enhancement",
      "Core engagement design",
      "Balance training mode",
      "Therapeutic positioning",
      "Safety rails included"
    ],
    specifications: {
      weight: "27 kg",
      dimensions: "120 x 66 x 138 cm",
      material: "Reinforced aluminum",
      maxUserWeight: "160 kg",
      resistanceLevels: "8 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-power",
    name: "AquaCycle Power",
    category: "Premium",
    shortDescription: "Maximum resistance for strength training",
    description: "High-resistance model designed for power training and muscle building in water.",
    price: 4800,
    rentalPrice: { daily: 90, weekly: 580, monthly: 2050 },
    image: "https://images.unsplash.com/photo-1760863329482-aa37dba2fd9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Maximum resistance levels",
      "Power training programs",
      "Reinforced frame",
      "Heavy-duty pedals",
      "Strength-focused design"
    ],
    specifications: {
      weight: "36 kg",
      dimensions: "128 x 66 x 146 cm",
      material: "Reinforced steel",
      maxUserWeight: "200 kg",
      resistanceLevels: "20 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-zen",
    name: "AquaCycle Zen",
    category: "Standard",
    shortDescription: "Gentle, mindful movement focus",
    description: "Wellness-oriented model perfect for gentle exercise and mindful movement in water.",
    price: 2600,
    rentalPrice: { daily: 52, weekly: 330, monthly: 1150 },
    image: "https://images.unsplash.com/photo-1633430480411-9b0e11d8202e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "Smooth quiet operation",
      "Comfortable seating",
      "Gentle resistance curve",
      "Relaxation-focused",
      "Meditation-friendly design"
    ],
    specifications: {
      weight: "24 kg",
      dimensions: "118 x 60 x 138 cm",
      material: "Brushed aluminum",
      maxUserWeight: "155 kg",
      resistanceLevels: "7 levels"
    },
    inStock: true
  },
  {
    id: "aquacycle-infinity",
    name: "AquaCycle Infinity",
    category: "Premium",
    shortDescription: "Cutting-edge technology integration",
    description: "Next-generation poolbike with advanced sensors, AI coaching, and virtual reality compatibility.",
    price: 7500,
    rentalPrice: { daily: 130, weekly: 850, monthly: 3000 },
    image: "https://images.unsplash.com/photo-1614954553401-811f9df3f9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    features: [
      "VR compatibility",
      "AI personal trainer",
      "Biometric sensors",
      "Cloud connectivity",
      "Future-ready platform"
    ],
    specifications: {
      weight: "38 kg",
      dimensions: "132 x 72 x 152 cm",
      material: "Advanced composites",
      maxUserWeight: "210 kg",
      resistanceLevels: "Infinite"
    },
    inStock: true
  }
];

export const categories = ["All", "Standard", "Premium", "Commercial", "Therapeutic", "Youth"];
