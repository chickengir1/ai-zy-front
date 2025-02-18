export const BaseClasses = {
  container:
    "cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-xl w-[250px] h-[250px] md:w-[300px] md:h-[300px]",
  linkButton: "flex h-full w-full flex-col items-center justify-center",
  iconContainer:
    "flex items-center justify-center rounded-full border-2 border-dashed border-gray-300",
  icon: "text-gray-400",
  text: "font-medium text-gray-500",
};

export const SizeClasses = {
  linkButton: "gap-4 md:gap-3",
  iconContainer: "h-12 w-12 md:h-10 md:w-10",
  icon: "h-6 w-6 md:h-5 md:w-5",
  text: "text-base md:text-lg",
};

export const SharedCardStyles = {
  tag: "m-2 w-fit rounded-full bg-black px-2 py-1 text-sm text-center text-white",
  title: "truncate font-bold text-gray-700",
  description: "truncate text-gray-500",
  footer: "flex items-center justify-between",
  participantText: "text-gray-800",
};

export const MainLayoutClasses = {
  container: "flex h-screen w-screen",
  grid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-6",
  padding: "px-4 py-4 sm:px-8 md:px-12 lg:px-16",
  headerNavPadding:
    "flex w-full flex-col items-center gap-4 px-20 pt-4 md:flex-row",
};

export const SidebarClasses = {
  buttonClasses: "rounded-r w-[100px] px-4 py-2 text-sm text-white",
  inputClasses: "w-full rounded-l border p-2 h-12 text-sm focus:outline-none ",
  inputFocus: "focus:ring-2 focus:ring-indigo-500",
  errorClasses: "mt-1 text-xs text-red-500",
  listClasses: "rounded-md border shadow-sm",
  titleClasses: "text-lg font-medium mb-2",
};

export const DocumentClasses = {
  container:
    "min-h-[500px] max-w-3xl space-y-6 rounded-lg bg-white p-4 shadow-md md:w-[48rem]",
  layoutClasses: "flex items-center justify-center p-4",
};

export const UnitClasses = {
  button:
    "w-full rounded-lg bg-indigo-600 px-4 py-3 text-white transition-colors hover:bg-indigo-700",
  header: "sticky top-0 z-10 bg-white",
};

export const HeaderClasses = {
  headerResponsive: "sm:px-3 sm:py-6 lg:px-4 lg:py-8",
  headerClasses: "text-lg sm:text-xl lg:text-2xl",
  backButton:
    "group flex items-center p-2 text-gray-600 transition-all duration-300 hover:text-indigo-600 ",
  backButtonIcon:
    "transform transition-transform duration-300 group-hover:translate-x-[-5px] group-hover:scale-105",
};
