export const baseClasses = {
  container:
    "cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-xl w-[250px] h-[250px] md:w-[300px] md:h-[300px]",
  linkButton: "flex h-full w-full flex-col items-center justify-center",
  iconContainer:
    "flex items-center justify-center rounded-full border-2 border-dashed border-gray-300",
  icon: "text-gray-400",
  text: "font-medium text-gray-500",
};

export const sizeClasses = {
  linkButton: "gap-4 md:gap-3",
  iconContainer: "h-12 w-12 md:h-10 md:w-10",
  icon: "h-6 w-6 md:h-5 md:w-5",
  text: "text-base md:text-lg",
};

export const sharedCardStyles = {
  tag: "m-2 w-fit rounded-full bg-black px-2 py-1 text-sm text-center text-white",
  title: "truncate font-bold text-gray-700",
  description: "truncate text-gray-500",
  footer: "flex items-center justify-between",
  participantText: "text-gray-800",
};

export const MainLayoutClasses = {
  container: "flex h-screen w-screen",
  grid: "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center gap-6",
  padding: "px-4 py-4 sm:px-8 md:px-12 lg:px-16",
  headerPadding:
    "flex w-full flex-col items-center gap-4 px-20 pt-4 md:flex-row",
};
