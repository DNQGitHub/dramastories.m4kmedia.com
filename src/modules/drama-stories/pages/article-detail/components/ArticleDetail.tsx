import { buildAssetUrlById } from "@/_shared/vendors/directus/utils/asset-utills";

type ArticleModel = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content?: string;
  cover_image?: string;
  date_created?: string;
  date_updated?: string;
};

type Props = {
  article: ArticleModel;
};

export function ArticleDetail(props: Props) {
  const { article } = props;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">{article.title}</h1>
      {article.cover_image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={buildAssetUrlById(article.cover_image)}
          alt={article.title}
          className="max-h-60 w-full rounded-lg object-cover"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.content || "" }}></div>
    </div>
  );
}
