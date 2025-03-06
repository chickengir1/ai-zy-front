export const MainLayoutStyles = {
  container: "flex h-screen w-screen",
  grid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-6",
  padding: "py-4 sm:px-4 md:px-8 lg:px-12",
  headerNavPadding:
    "flex w-full flex-col items-center gap-4 px-4 md:px-20 pt-4 md:flex-row justify-between",
};

export const ProjectCardStyles = {
  layout:
    "cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-xl w-[90%]",
  card: "group relative h-[250px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md md:h-[300px]",
  gradient:
    "absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50",
  folderIcon: "absolute right-6 top-6",
  folderSvg: "-z-15 h-32 w-32 text-blue-300/80",
  content: "relative flex h-full flex-col justify-between p-6",
  infoSection: "space-y-4",
  tag: "inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600",
  title: "truncate text-2xl font-semibold text-gray-900",
  description: "line-clamp-3 text-gray-600 md:line-clamp-4",
  footer: "border-t pt-4",
  participantInfo: "flex items-center justify-between",
  participantCount: "text-sm text-gray-500",
};

export const ProceedingCardStyles = {
  layout:
    "cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-xl w-[90%]",
  container: "relative flex h-[250px] md:h-[300px]",
  card: "flex h-full w-full flex-col justify-between gap-4 rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:ring-2 hover:ring-blue-100",
  tag: "absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white shadow-md",
  content: "h-full rounded-xl bg-white px-4",
  titleContainer: "max-w-[250px]",
  title: "line-clamp-2 font-semibold text-gray-800 text-sm md:text-base",
  date: "truncate text-blue-600 text-xs md:text-sm",
  footer:
    "absolute bottom-0 left-0 right-0 flex items-center justify-between p-4",
  participantCount: "text-gray-500 text-sm",
};

export const CreationItemStyles = {
  link: "flex h-full flex-col items-center justify-center gap-3 transition-colors hover:bg-gray-50/50",
  iconContainer:
    "flex h-14 w-14 items-center justify-center rounded-full bg-gray-100",
  icon: "h-6 w-6 text-gray-600",
  text: "text-[15px] font-medium text-gray-600",
};

export const SidebarStyles = {
  buttonClasses: "rounded-r w-[100px] px-4 py-2 text-sm text-white",
  inputClasses: "w-full rounded-l border p-2 h-12 text-sm focus:outline-none ",
  inputFocus: "focus:ring-2 focus:ring-indigo-500",
  errorClasses: "mt-1 text-xs text-red-500",
  listClasses: "rounded-md border shadow-sm",
  titleClasses: "text-lg font-medium mb-2",
  backdropClasses: "fixed inset-0 z-40 bg-black/50",
  sidebarClasses:
    "fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-white shadow-lg md:w-1/2",
};

export const DeleteModalStyles = {
  container: "flex flex-col space-y-4",
  title: "text-xl font-bold text-red-600",
  description: "text-sm text-gray-600 whitespace-pre-line",
  confirmContainer: "mt-4 p-4 bg-red-50 rounded-md border border-red-200",
  confirmText: "font-medium text-red-700",
  confirmInput: "w-full p-2 mt-2 border border-gray-300 rounded",
  buttonContainer: "flex flex-col space-y-2 pt-4",
  button: "w-full py-2 px-4 rounded transition-colors",
  cancelButton: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  deleteButton:
    "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed",
};

export const ProceedingHeaderStyles = {
  container: "mb-6 rounded-md border border-gray-100 bg-white p-5 shadow-md",
  headerWrapper: "flex items-start justify-between gap-4",
  title: "text-2xl font-semibold text-gray-900 tracking-tight md:text-3xl",
  dateContainer: "flex items-center gap-2 text-gray-500",
  dateIcon: "h-5 w-5 text-gray-400 shrink-0",
  dateText: "text-sm md:text-base",
  settingButton:
    "p-1.5 -m-1.5 rounded-lg text-gray-400 hover:text-gray-600 transition-colors",
  participantSection: "mt-6 pt-6 border-t border-gray-100",
  participantTitle:
    "flex items-center gap-2 text-sm font-semibold text-gray-500 mb-3",
};

export const ProceedingStyles = {
  container:
    "min-h-[690px] max-w-3xl space-y-6 rounded-lg bg-white p-4 shadow-md md:w-[48rem]",
  layoutClasses: "flex items-center justify-center p-4",
};

export const PaginationStyles = {
  container: "flex items-center justify-center gap-2 py-6",
  button: {
    base: "flex h-9 w-9 items-center justify-center rounded-full",
    common:
      "border border-gray-300 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)]",
    hover:
      "transition-all hover:border-gray-400 hover:bg-gray-50 hover:shadow-[0_4px_6px_rgba(0,0,0,0.07)]",
    active: "active:scale-[0.98] disabled:opacity-50",
    disabled: "disabled:cursor-not-allowed disabled:shadow-none",
  },
  indicator:
    "mx-2 flex h-8 items-center justify-center rounded-md bg-gray-50 px-3.5 text-[13px] font-[510] text-gray-600",
  icon: {
    left: "h-4 w-4 text-gray-600",
    right: "h-4 w-4 text-gray-700",
  },
};

export const HeaderStyles = {
  headerResponsive: "sm:p-4 md:p-6 lg:p-8 ",
  headerClasses: "text-lg sm:text-xl lg:text-2xl",
  button:
    "group flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600",
  icon: "transform transition-transform duration-300 group-hover:translate-x-[-3px]",
  text: "text-sm font-medium",
};

export const CommandBaseStyles = {
  bg: "bg-[#313338]",
  text: "text-gray-100",
  border: "border-[#F0F3F7]",
  placeholder: "placeholder-gray-400",
};

export const NormalBaseStyles = {
  bg: "bg-white",
  text: "text-gray-800",
  border: "border-gray-200",
  placeholder: "placeholder-gray-500",
};

export const ToolStyles = {
  base: "fixed right-4 z-40 transition-all duration-300 hover:scale-105",
  chat: "bottom-4",
  setting: "bottom-16",
  icon: "h-8 w-8 scale-x-[-1] transform md:h-10 md:w-10 lg:h-12 lg:w-12",
};

export const TabStyles = {
  currentTabText: "font-semibold text-indigo-600",
  currentTabBorder: "border border-indigo-600 rounded-md bg-white",
  inactiveTab: "text-gray-500 hover:text-gray-700",
  currentTab: "py-3 transition-all duration-200",
};

export const UnitStyles = {
  button:
    "w-full rounded-lg bg-indigo-600 px-4 py-3 text-white transition-colors hover:bg-indigo-700",
  header: "sticky top-0 z-10 bg-white",
};
