import { directusGraphqlClient } from "../../../../../_shared/vendors/directus/directus-graphql-client";

export type ArticleResponse = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
};

export type ArticleModel = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
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
    content: article.content,
    cover_image: article.cover_image || "",
    date_created: article.date_created,
    date_updated: article.date_updated,
  };
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleModel | null> {
  const response = await directusGraphqlClient.query(
    `
        query {
            articles(filter: { slug: { _eq: "${slug}" } }) {
                id
                title
                slug
                summary
                content
                date_created
                date_updated
                cover_image
            }
        }
    `,
  );

  return response.articles.map(mapArticleData)[0] || null;
}
