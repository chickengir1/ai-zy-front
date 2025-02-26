import { BiSearch } from "react-icons/bi";

interface SearchInputProps {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function SearchInput({
  onClick,
  onChange,
  placeholder,
}: SearchInputProps) {
  return (
    <div className="relative w-full max-w-[225px] sm:max-w-[250px] md:max-w-[300px] md:py-4 lg:max-w-[400px]">
      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-full border-2 bg-gray-50 pl-4 pr-12 text-xs focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm md:text-base"
        onChange={onChange}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
        onClick={onClick}
      >
        <BiSearch size={20} />
      </button>
    </div>
  );
}
