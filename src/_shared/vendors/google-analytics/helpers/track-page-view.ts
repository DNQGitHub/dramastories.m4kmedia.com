export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: path,
  });
}
