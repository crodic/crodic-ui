export type Event = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
};

export function trackEvent(input: Event): void {
  // Safe analytics tracker
}
