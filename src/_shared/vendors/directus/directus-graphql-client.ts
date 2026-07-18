import { directusClient } from "./directus-client";
import { graphql } from "@directus/sdk";

export const directusGraphqlClient = directusClient.with(graphql());
