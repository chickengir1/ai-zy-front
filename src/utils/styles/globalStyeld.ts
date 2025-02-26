export const BaseClassesStyles = {
  container:
    "cursor-pointer rounded-2xl shadow-lg transition-shadow hover:shadow-xl w-[250px] h-[250px] md:w-[300px] md:h-[300px]",
  linkButton: "flex h-full w-full flex-col items-center justify-center",
  iconContainer:
    "flex items-center justify-center rounded-full border-2 border-dashed border-gray-300",
  icon: "text-gray-400",
  text: "font-medium text-gray-500",
};

export const SizeClassesStyles = {
  linkButton: "gap-4 md:gap-3",
  iconContainer: "h-12 w-12 md:h-10 md:w-10",
  icon: "h-6 w-6 md:h-5 md:w-5",
  text: "text-base md:text-lg",
};

export const SharedCardClassesStyles = {
  tag: "m-2 w-fit rounded-full bg-black px-2 py-1 text-sm text-center text-white",
  title: "truncate font-bold text-gray-700",
  description: "truncate text-gray-500",
  footer: "flex items-center justify-between",
  participantText: "text-gray-800",
};

export const MainLayoutClassesStyles = {
  container: "flex h-screen w-screen",
  grid: "grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-items-center gap-6",
  padding: "px-4 py-4 sm:px-8 md:px-12 lg:px-16",
  headerNavPadding:
    "flex w-full flex-col items-center gap-4 px-4 md:px-20 pt-4 md:flex-row",
};

export const SidebarClassesStyles = {
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

export const DocumentClassesStyles = {
  container:
    "min-h-[690px] max-w-3xl space-y-6 rounded-lg bg-white p-4 shadow-md md:w-[48rem]",
  layoutClasses: "flex items-center justify-center p-4",
};

export const UnitClassesStyles = {
  button:
    "w-full rounded-lg bg-indigo-600 px-4 py-3 text-white transition-colors hover:bg-indigo-700",
  header: "sticky top-0 z-10 bg-white",
};

export const HeaderClassesStyles = {
  headerResponsive: "sm:p-4 md:p-6 lg:p-8",
  headerClasses: "text-lg sm:text-xl lg:text-2xl",
  button:
    "group flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600",
  icon: "transform transition-transform duration-300 group-hover:translate-x-[-3px]",
  text: "text-sm font-medium",
};

export const ToolClassesStyles = {
  base: "fixed right-4 z-40 transition-all duration-300 hover:scale-105",
  chat: "bottom-4",
  setting: "bottom-16",
  icon: "h-8 w-8 scale-x-[-1] transform md:h-10 md:w-10 lg:h-12 lg:w-12",
};

export const TabClassesStyles = {
  currentTabText: "font-semibold text-indigo-600",
  currentTabBorder: "border border-indigo-600 rounded-md bg-white",
  inactiveTab: "text-gray-500 hover:text-gray-700",
  currentTab: "py-3 transition-all duration-200",
};

export const CommandBaseesStyles = {
  bg: "bg-[#313338]",
  text: "text-gray-100",
  border: "border-[#F0F3F7]",
  placeholder: "placeholder-gray-400",
};

export const NormalBaseesStyles = {
  bg: "bg-white",
  text: "text-gray-800",
  border: "border-gray-200",
  placeholder: "placeholder-gray-500",
};

export const MeetingCardStyles = {
  container: "relative flex flex-col gap-4 bg-white p-4",
  header: "flex items-start justify-between",
  headerWrapper: "flex flex-1 items-center gap-4",
  iconContainer:
    "flex shrink-0 items-center justify-center rounded-full border bg-blue-100 p-3",
  icon: "text-blue-500",
  titleContainer: "max-w-[130px]",
  tagLabel: "absolute right-0 top-0",
  contentBox:
    "h-[100px] overflow-y-auto rounded-r border-l-4 border-gray-300 bg-gray-200 p-2 text-sm md:h-[160px]",
  contentText: "whitespace-pre-line break-words",
};

export const DocumentHeaderStyles = {
  container:
    "mb-4 rounded-t-lg border border-gray-200 bg-gray-50 p-4 shadow-md",
  headerWrapper: "flex items-start justify-between",
  titleSection: "space-y-2",
  title: "text-xl font-bold md:text-2xl",
  dateContainer: "flex items-center gap-2 text-sm text-gray-500 md:text-base",
  dateIcon: "h-4 w-4 md:h-5 md:w-5",
  dateText: "-mt-[0.5px]",
  settingButton:
    "h-7 w-7 text-gray-500 transition-all hover:text-gray-700 md:h-8 md:w-8",
  participantSection: "mt-4 border-t border-gray-200 pt-4",
  participantTitle: "flex items-center gap-2 text-sm font-semibold",
  participantIcon: "h-5 w-5 md:h-6 md:w-6",
  participantListContainer: "mt-2 max-w-[325px]",
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
