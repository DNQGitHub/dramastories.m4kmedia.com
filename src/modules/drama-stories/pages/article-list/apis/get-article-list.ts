import { directusGraphqlClient } from "../../../../../_shared/vendors/directus/directus-graphql-client";

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

export type ArticleModel = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
};

export function mapArticleData(article: ArticleResponse): ArticleModel {
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

export async function getArticleList(): Promise<ArticleModel[]> {
  const response = await directusGraphqlClient.query(
    `
        query {
            articles(
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
        }
    `,
  );

  return response.articles.map(mapArticleData);
}
