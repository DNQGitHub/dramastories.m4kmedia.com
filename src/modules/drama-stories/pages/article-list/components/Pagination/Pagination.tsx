import Link from "next/link";
import { buildPagination } from "./Pagination.helpers";

type Props = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
};

export function Pagination(props: Props) {
  const { currentPage, pageSize, totalItems } = props;
  const totalPages = Math.ceil(totalItems / pageSize);
  const items = buildPagination(currentPage, totalPages);

  return (
    <nav className="flex justify-center gap-2 text-sm font-medium">
      {items.map((item, index) =>
        item.type === "ellipsis" ? (
          <span className="px-2" key={index}>
            ...
          </span>
        ) : (
          <Link
            className={`px-3 py-1 rounded-md ${
              item.active
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            key={item.page}
            href={item.active ? `/articles?page=${item.page}` : "#"}
            aria-current={item.active ? "page" : undefined}
          >
            {item.page}
          </Link>
        ),
      )}
    </nav>
  );
}
