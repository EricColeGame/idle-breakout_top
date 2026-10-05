export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Idle Breakout Wiki",
  shortName: "Idle Breakout",
  logoText: "IB",
  tagline: "Balls, Upgrades, Prestige & Strategy Guides",
  description: "Explore the Idle Breakout Wiki for ball types, upgrades, prestige, bosses, skills, strategies, and beginner tips to progress faster in the classic idle brick-breaking game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://idle-breakout.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://idle-breakout.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.kongregate.com/en/games/kodiqi/idle-breakout",
  heroVideoId: "lnvTYJUlluY", // Idle Breakout strategy & gameplay showcase
  social: {},
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
