export interface ProductVideo {
  url: string;
  label: string;
  source: string;
  direct: boolean;
}

const officialChannelSearch = (query: string): ProductVideo => ({
  url: `https://www.youtube.com/@PoolbikingBarcelona/search?query=${encodeURIComponent(query)}`,
  label: "Find official video",
  source: "POOLBIKING Barcelona on YouTube",
  direct: false,
});

export const productVideos: Record<string, ProductVideo> = {
  "poolbiking-berlin": officialChannelSearch("POOLBIKING BERLIN"),
  "poolbiking-one-2-0": {
    url: "https://www.youtube.com/watch?v=T65OTu44GmM",
    label: "Watch product video",
    source: "POOLBIKING ONE product demonstration",
    direct: true,
  },
  "poolbiking-one-plus": {
    url: "https://www.youtube.com/watch?v=iZdVoUxHp4M",
    label: "Watch product video",
    source: "POOLBIKING ONE PLUS demonstration",
    direct: true,
  },
  "poolbiking-evolution": officialChannelSearch("POOLBIKING EVOLUTION"),
  "poolbiking-ibiza": officialChannelSearch("POOLBIKING IBIZA"),
  "poolbiking-core": officialChannelSearch("POOLBIKING CORE"),
  "poolmat-set": officialChannelSearch("POOLMAT"),
  "pooljumping-trampoline": officialChannelSearch("POOLJUMPING"),
  "poolbag": officialChannelSearch("POOLBAG"),
  "poolball": officialChannelSearch("POOLBALL"),
  "poolbiking-monaco": {
    url: "https://www.youtube.com/watch?v=gYllJKUkidU",
    label: "Watch product video",
    source: "Poolbiking Monaco demonstration",
    direct: true,
  },
  "poolbiking-orbital": {
    url: "https://vimeo.com/134831820",
    label: "Watch official video",
    source: "POOLBIKING Barcelona on Vimeo",
    direct: true,
  },
  "poolbiking-paris": officialChannelSearch("POOLBIKING PARIS"),
  "poolbiking-tenerife": {
    url: "https://www.youtube.com/watch?v=V0p9ZPydA7E",
    label: "Watch POOLBIKING video",
    source: "POOLBIKING Tenerife masterclass",
    direct: true,
  },
  "poolbiking-veracruz": {
    url: "https://www.youtube.com/watch?v=c4eogdMqmGU",
    label: "Watch product video",
    source: "POOLBIKING Veracruz demonstration",
    direct: true,
  },
  "poolfit-basic": officialChannelSearch("POOLFIT BASIC"),
  "poolfit-premium": officialChannelSearch("POOLFIT PREMIUM"),
  "pooltrekking-acapulco": officialChannelSearch("POOLTREKKING ACAPULCO"),
  "pooltrekking-medical": officialChannelSearch("POOLTREKKING MEDICAL"),
  "pooltrekking-miami": officialChannelSearch("POOLTREKKING MIAMI"),
  "meta-400": officialChannelSearch("ELEVATOR META 400"),
  "meta-pk": officialChannelSearch("ELEVATOR META PK"),
  "pool-step": officialChannelSearch("POOLBIKING STEP"),
};
