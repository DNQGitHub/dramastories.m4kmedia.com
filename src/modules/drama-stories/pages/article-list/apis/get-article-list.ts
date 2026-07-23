import { directusGraphqlClient } from "../../../../../_shared/vendors/directus/directus-graphql-client";

// --- Response types from Directus GraphQL API

export type GetArticleListResponse = {
  articles: ArticleResponse[];
  articles_aggregated: ArticleAggregatedResponse[];
};

export type ArticleResponse = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  cover_image?: {
    id: string;
  };
  date_created?: string;
  date_updated?: string;
};

export type ArticleAggregatedResponse = {
  count: {
    id: number;
  };
};

// --- Mapped types for internal use

export type ArticleModel = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
};

// --- Function to transform API response to internal model

export function transformArticleResponseToArticleModel(
  article: ArticleResponse,
): ArticleModel {
  return {
    id: article.id,
    title: article.title,
    slug: article.slug,
    summary: article.summary,
    cover_image: article.cover_image?.id || "",
    date_created: article.date_created,
    date_updated: article.date_updated,
  };
}

// --- API function to fetch articles

export type GetArticleListParams = {
  page?: number;
  pageSize?: number;
};

export type GetArticleListResult = {
  articles: ArticleModel[];
  totalCount: number;
};

export async function getArticleList(
  params: GetArticleListParams = {},
): Promise<GetArticleListResult> {
  const { page = 0, pageSize = 10 } = params;

  const response: GetArticleListResponse = await directusGraphqlClient.query(
    `
        query GetArticleList($page: Int!, $pageSize: Int!) {
            articles(
                page: $page,
                limit: $pageSize,
                filter: { status: { _eq: "published" } }, 
                sort: ["-date_created"]
            ) {
                id
                title
                slug
                summary
                date_created
                date_updated
                cover_image {
                  id
                }
            }

            articles_aggregated(filter: { status: { _eq: "published" } }) {
                count {
                  id
                }
            }
        }
    `,
    {
      page,
      pageSize,
    },
  );

  const articles = response.articles.map(
    transformArticleResponseToArticleModel,
  );
  const totalCount = response.articles_aggregated?.[0].count.id || 0;

  return {
    articles,
    totalCount,
  };
}
