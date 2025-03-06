import { useMemo, useState } from "react";
import { useNavigation } from "@/hooks/utility/navigation/useNavigation";
import { useSearchStore } from "@/store/utilityStore/searchStore";

interface SearchProps {
  items: string[];
  dynamicUrl?: (id: string) => string;
  staticUrl?: string;
}

export default function useSearch({
  items,
  dynamicUrl,
  staticUrl,
}: SearchProps) {
  const { search, setSearch, resetSearch } = useSearchStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { goTo } = useNavigation();

  const filteredItems = useMemo(() => {
    const trimmedSearch = search.trim().toLowerCase();
    if (!trimmedSearch) return [];

    return items.filter((item) => item.toLowerCase().includes(trimmedSearch));
  }, [search, items]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
    setIsDropdownOpen(!!value.trim());
  }

  function handleItemClick(item: string, url: string) {
    setSearch(item);
    setIsDropdownOpen((prev) => !prev);
    goTo(url);
  }

  function handleResultClick(item: string) {
    return () => {
      const itemUrl = dynamicUrl?.(item) ?? staticUrl ?? "";
      handleItemClick(item, itemUrl);
      resetSearch();
    };
  }

  return {
    states: { search, filteredItems, isDropdownOpen },
    handlers: {
      handleSearchChange,
      handleResultClick,
    },
  };
}
