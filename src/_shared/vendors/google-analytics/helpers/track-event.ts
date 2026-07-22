export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
}
