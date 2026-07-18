import { createDirectus } from "@directus/sdk";

const directusClient = createDirectus("http://localhost:8055");

export { directusClient };
