export type EllipsisPaginationItem = {
  type: "ellipsis";
};

export type PaginationItem =
  | EllipsisPaginationItem
  | {
      type: "page";
      page: number;
      active: boolean;
    };

export function buildPagination(
  currentPage: number,
  totalPages: number,
  siblingCount = 2,
): PaginationItem[] {
  if (totalPages <= 0) {
    return [];
  }

  const pages = new Set<number>();

  // Always include first & last page
  pages.add(1);
  pages.add(totalPages);

  // Current page window
  const start = Math.max(2, currentPage - siblingCount);
  const end = Math.min(totalPages - 1, currentPage + siblingCount);

  for (let page = start; page <= end; page++) {
    pages.add(page);
  }

  const sortedPages = [...pages].sort((a, b) => a - b);

  const result: PaginationItem[] = [];

  for (let i = 0; i < sortedPages.length; i++) {
    const page = sortedPages[i];
    const previous = sortedPages[i - 1];

    if (previous !== undefined && page - previous > 1) {
      result.push({
        type: "ellipsis",
      });
    }

    result.push({
      type: "page",
      page,
      active: page !== currentPage,
    });
  }

  return result;
}
