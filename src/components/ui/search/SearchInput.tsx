import useSearch from "@/hooks/utility/common/useSearch";
import { BiSearch } from "react-icons/bi";
import { SearchResults } from "./SearchResults";

interface SearchInputProps {
  placeholder: string;
  items: string[];
  dynamicUrl?: (id: string) => string;
  staticUrl?: string;
}

export default function SearchInput({
  placeholder,
  items,
  dynamicUrl,
  staticUrl,
}: SearchInputProps) {
  const { states, handlers } = useSearch({ items, dynamicUrl, staticUrl });
  const { search, filteredItems, isDropdownOpen } = states;
  const { handleSearchChange } = handlers;

  return (
    <div className="relative w-full md:max-w-[300px] md:py-4 lg:max-w-[400px]">
      <input
        autoFocus
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-full border-2 bg-gray-50 pl-4 pr-12 text-xs focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm md:text-base"
        onChange={handleSearchChange}
        value={search}
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600">
        <BiSearch size={20} />
      </button>
      {isDropdownOpen && filteredItems.length > 0 && (
        <SearchResults
          items={filteredItems}
          dynamicUrl={dynamicUrl}
          staticUrl={staticUrl}
        />
      )}
    </div>
  );
}
