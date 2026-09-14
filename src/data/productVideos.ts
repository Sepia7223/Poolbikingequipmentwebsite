export interface ProductVideo {
  url: string;
  label: string;
  source: string;
  direct: boolean;
}

const poolbikingOverview: ProductVideo = {
  url: "https://www.youtube.com/watch?v=ccKP3ZRL9uc",
  label: "Watch POOLBIKING video",
  source: "This is Poolbiking | POOLBIKING",
  direct: true,
};

const pooltrekkingVideo: ProductVideo = {
  url: "https://www.youtube.com/watch?v=muzXyX061uk",
  label: "Watch Pooltrekking video",
  source: "Pooltrekking Acapulco product video",
  direct: true,
};

export const productVideos: Record<string, ProductVideo> = {
  // Aquabikes. Use a model-specific video when a reliable direct video is available.
  // Closely related variants share the POOLBIKING overview rather than linking to a search page.
  "poolbiking-berlin": poolbikingOverview,
  "poolbiking-one-2-0": poolbikingOverview,
  "poolbiking-one-plus": poolbikingOverview,
  "poolbiking-evolution": poolbikingOverview,
  "poolbiking-ibiza": {
    url: "https://www.youtube.com/watch?v=_CPXzHKlKAY",
    label: "Watch Ibiza video",
    source: "POOLBIKING IBIZA | POOLBIKING",
    direct: true,
  },
  "poolbiking-core": poolbikingOverview,
  "poolbiking-monaco": {
    url: "https://www.youtube.com/watch?v=gYllJKUkidU",
    label: "Watch Monaco video",
    source: "Poolbiking Monaco product demonstration",
    direct: true,
  },
  "poolbiking-orbital": {
    url: "https://www.youtube.com/watch?v=zyS7GCsGTz8",
    label: "Watch Orbital video",
    source: "Poolbiking Orbital product video",
    direct: true,
  },
  "poolbiking-paris": poolbikingOverview,
  "poolbiking-tenerife": {
    url: "https://www.youtube.com/watch?v=V0p9ZPydA7E",
    label: "Watch Tenerife video",
    source: "2012 MasterClass Tenerife | POOLBIKING",
    direct: true,
  },
  "poolbiking-veracruz": {
    url: "https://www.youtube.com/watch?v=c4eogdMqmGU",
    label: "Watch Veracruz video",
    source: "POOLBIKING Veracruz product demonstration",
    direct: true,
  },

  // Pooltrekking variants use the same direct family video when a model-specific clip
  // is not available. They share the same aquatic treadmill concept and differ mainly
  // in support/fastening configuration.
  "pooltrekking-acapulco": pooltrekkingVideo,
  "pooltrekking-medical": pooltrekkingVideo,
  "pooltrekking-miami": pooltrekkingVideo,

  // Related aquatic training products. A direct POOLBIKING overview is more useful
  // than sending visitors to a YouTube search-results page.
  "poolmat-set": poolbikingOverview,
  "pooljumping-trampoline": poolbikingOverview,
  "poolbag": poolbikingOverview,
  "poolball": poolbikingOverview,
  "poolfit-basic": poolbikingOverview,
  "poolfit-premium": poolbikingOverview,
};
