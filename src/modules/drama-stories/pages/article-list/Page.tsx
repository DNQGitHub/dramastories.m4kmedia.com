import React from "react";
import { getArticleList } from "@/modules/drama-stories/pages/article-list/apis/get-article-list";
import { resolvePromise } from "@/_shared/utils/resolve-promise";
import { ArticleList } from "./components/ArticleList";
import { FetchArticlesFailed } from "./components/FetchArticlesFailed";
import { EmptyArticleList } from "./components/EmptyArticleList";

async function ArticleListContainer() {
  const [articles, error] = await resolvePromise(getArticleList());

  if (error || !articles) {
    return <FetchArticlesFailed />;
  }

  if (articles.length === 0) {
    return <EmptyArticleList />;
  }

  return <ArticleList articles={articles} />;
}

export async function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
      <h1 className="text-4xl font-bold">Articles</h1>

      <ArticleListContainer />
    </main>
  );
}
