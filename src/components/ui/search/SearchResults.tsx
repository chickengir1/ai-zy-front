import useSearch from "@/hooks/utility/common/useSearch";

interface SearchResultsProps {
  items: string[];
  dynamicUrl?: (id: string) => string;
  staticUrl?: string;
}

export function SearchResults({
  items,
  dynamicUrl,
  staticUrl,
}: SearchResultsProps) {
  const { handlers } = useSearch({ items, dynamicUrl, staticUrl });
  const { handleResultClick } = handlers;

  return (
    <div className="absolute z-10 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
      {items.map((item) => (
        <div
          key={item}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
          onClick={handleResultClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
