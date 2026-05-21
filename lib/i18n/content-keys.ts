export const serviceSlugToContentKey = {
  "web-development": "webDevelopment",
  "mobile-app-development": "mobileAppDevelopment",
  "blockchain-development": "blockchainDevelopment",
  "unreal-engine-5-game-development": "unrealEngine5GameDevelopment",
  "ai-development": "aiDevelopment",
  "it-consultancy": "itConsultancy",
} as const;

export type ServiceContentKey =
  (typeof serviceSlugToContentKey)[keyof typeof serviceSlugToContentKey];

export const portfolioSlugToContentKey = {
  "nft-marketplace": "nftMarketplace",
  charlieparty: "charlieparty",
  "unicorn-racing-game": "unicornRacingGame",
  "babyu-ai": "babyuAi",
} as const;

export type PortfolioContentKey =
  (typeof portfolioSlugToContentKey)[keyof typeof portfolioSlugToContentKey];
