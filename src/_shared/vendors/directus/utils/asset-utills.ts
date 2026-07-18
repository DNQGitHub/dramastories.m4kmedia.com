const baseUrl = "http://localhost:8055";

export function buildAssetUrlById(assetId: string): string {
  return `${baseUrl}/assets/${assetId}`;
}
