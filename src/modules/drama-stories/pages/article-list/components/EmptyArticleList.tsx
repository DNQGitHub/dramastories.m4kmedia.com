export function EmptyArticleList() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold text-gray-800">No Articles Found</h2>
      <p className="mt-2 text-gray-600">
        Sorry, we couldn&apos;t find any articles to display.
      </p>
    </div>
  );
}
