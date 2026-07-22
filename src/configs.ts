export const configs = {
  googleAnalytics: {
    measurementId:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID || "G-XXXXXXXXXX",
  },
  directus: {
    url: process.env.DIRECTUS_URL || "http://localhost:8055",
  },
};
