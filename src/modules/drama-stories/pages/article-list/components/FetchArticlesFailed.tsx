export function FetchArticlesFailed() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold text-gray-800">
        Failed to Fetch Articles
      </h2>
      <p className="mt-2 text-gray-600">
        Sorry, we encountered an error while trying to fetch the articles.
        Please{" "}
        <a className="text-blue-500 hover:underline" href="/articles">
          try again
        </a>{" "}
        later.
      </p>
    </div>
  );
}
