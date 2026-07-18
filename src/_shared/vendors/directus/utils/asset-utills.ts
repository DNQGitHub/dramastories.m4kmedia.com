import { configs } from "@/configs";

const baseUrl = configs.directus.url;

export function buildAssetUrlById(assetId: string): string {
  return `${baseUrl}/assets/${assetId}`;
}
