import { buildAssetUrlById } from "@/_shared/vendors/directus/utils/asset-utills";

type ArticleModel = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  cover_image?: string;
  date_created?: string;
};

type Props = {
  article: ArticleModel;
};

export function Article({ article }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-gray-300 p-4">
      {article.cover_image && (
        <a href={`/articles/${article.slug}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={buildAssetUrlById(article.cover_image)}
            alt={article.title}
            className="max-h-60 w-full rounded-lg object-cover"
          />
        </a>
      )}

      <a className="text-2xl font-bold" href={`/articles/${article.slug}`}>
        {article.title}
      </a>

      {article.summary && <p className="text-gray-700">{article.summary}</p>}

      <a className="text-blue-500" href={`/articles/${article.slug}`}>
        Read More
      </a>
    </article>
  );
}
