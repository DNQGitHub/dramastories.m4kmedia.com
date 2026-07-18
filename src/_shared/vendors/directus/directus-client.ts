import { createDirectus } from "@directus/sdk";
import { configs } from "@/configs";

const directusClient = createDirectus(configs.directus.url);

export { directusClient };
