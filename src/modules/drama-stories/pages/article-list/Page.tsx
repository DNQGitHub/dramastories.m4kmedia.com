import React from "react";
import { ArticleListContainer } from "./components/ArticleListContainer";

const DEFAULT_PAGE_SIZE = 10;

type Props = {
  searchParams: {
    page?: string;
    pageSize?: string;
  };
};

export async function Page(props: Props) {
  const { searchParams } = props;

  const page = parseInt(searchParams.page || "1", 10);

  return (
    <main className="mx-auto max-w-4xl space-y-8 py-12 px-4">
      <h1 className="text-4xl font-bold">Articles</h1>

      <ArticleListContainer page={page} pageSize={DEFAULT_PAGE_SIZE} />
    </main>
  );
}
