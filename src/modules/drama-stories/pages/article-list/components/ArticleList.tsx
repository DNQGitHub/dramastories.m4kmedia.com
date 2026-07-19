import { ArticleModel } from "../Page.def";
import { Article } from "./Article";

export function ArticleList({ articles }: { articles: ArticleModel[] }) {
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
