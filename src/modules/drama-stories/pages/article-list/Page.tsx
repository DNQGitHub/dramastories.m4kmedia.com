import React from "react";
import { getArticleList } from "@/modules/drama-stories/pages/article-list/apis/get-article-list";
import { Article } from "./components/Article";

export async function Page() {
  const articles = await getArticleList();

  return (
    <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
      <h1 className="text-4xl font-bold">Articles</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}
