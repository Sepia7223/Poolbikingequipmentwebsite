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
  // Model-specific videos are used whenever a reliable direct link is available.
  // Closely related variants use a direct POOLBIKING brand/family video rather than
  // sending visitors to a YouTube search-results page.
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

  "poolmat-set": {
    url: "https://www.youtube.com/watch?v=dtw3NufvTUk",
    label: "Watch Poolmat video",
    source: "POOLMAT product video",
    direct: true,
  },
  "pooljumping-trampoline": {
    url: "https://www.youtube.com/watch?v=5ONbdL3_ov4",
    label: "Watch Pooljumping video",
    source: "POOLJUMPING product video",
    direct: true,
  },

  // Other aquatic training accessories currently use the direct POOLBIKING overview
  // until a verified product-specific clip is available.
  "poolbag": poolbikingOverview,
  "poolball": poolbikingOverview,
  "poolfit-basic": poolbikingOverview,
  "poolfit-premium": poolbikingOverview,
};
