import React from "react";
import { getArticleBySlug } from "../article-detail/apis/get-article-by-slug";
import { resolvePromise } from "@/_shared/utils/resolve-promise";
import { ArticleDetail } from "../article-detail/components/ArticleDetail";

type Props = {
  params: Promise<{ articleSlug: string }>;
};

export async function Page({ params }: Props) {
  const { articleSlug } = await params;
  const [article, error] = await resolvePromise(getArticleBySlug(articleSlug));

  if (!article || error) {
    return (
      <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <p>The article you are looking for does not exist.</p>
        <a className="text-blue-500 hover:underline" href="/articles">
          Back to Articles
        </a>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
      <div className="flex flex-col gap-8">
        <ArticleDetail key={article.id} article={article} />
        <a className="text-blue-500 hover:underline" href="/articles">
          Back to Articles
        </a>
      </div>
    </main>
  );
}
