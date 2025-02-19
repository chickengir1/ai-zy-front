import { LuSquareArrowDown } from "react-icons/lu";

export default function SelectWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
        <LuSquareArrowDown className="h-5 w-5" />
      </div>
    </div>
  );
}
