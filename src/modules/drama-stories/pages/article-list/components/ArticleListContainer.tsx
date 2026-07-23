import { resolvePromise } from "@/_shared/utils/resolve-promise";
import { getArticleList } from "../apis/get-article-list";
import { FetchArticlesFailed } from "./FetchArticlesFailed";
import { EmptyArticleList } from "./EmptyArticleList";
import { ArticleList } from "./ArticleList";
import { Pagination } from "./Pagination/Pagination";

type Props = {
  page: number;
  pageSize: number;
};

export async function ArticleListContainer(props: Props) {
  const page = props.page;
  const pageSize = props.pageSize;

  const [result, error] = await resolvePromise(
    getArticleList({ page, pageSize }),
  );

  if (error || !result) {
    return <FetchArticlesFailed />;
  }

  if (result.articles.length === 0) {
    return <EmptyArticleList />;
  }

  return (
    <>
      <ArticleList articles={result.articles} />
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalItems={result.totalCount}
      />
    </>
  );
}
