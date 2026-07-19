import React from "react";
import { getArticleList } from "@/modules/drama-stories/pages/article-list/apis/get-article-list";
import { resolvePromise } from "@/_shared/utils/resolve-promise";
import { Article } from "./components/Article";

export async function Page() {
  const [articles, error] = await resolvePromise(getArticleList());

  return (
    <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
      <h1 className="text-4xl font-bold">Articles</h1>

      {error || !articles ? (
        <p className="text-red-500">
          Failed to load articles.{" "}
          <a className="text-blue-500 hover:underline" href="/articles">
            Retry
          </a>
        </p>
      ) : (
        <div className="space-y-6">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      )}
    </main>
  );
}
