export default function Folder() {
  return (
    <div className={folderStyles.container}>
      <div className={folderStyles.folder}>
        <div className={folderStyles.top}></div>
        <div className={folderStyles.middle}></div>
        <div className={folderStyles.bottom}></div>
      </div>
    </div>
  );
}
const folderStyles = {
  container:
    "flex h-full items-center justify-center rounded-t-2xl bg-blue-50 py-6",
  folder:
    "group relative h-20 w-28 cursor-pointer rounded-bl-[7px] rounded-br-[7px] rounded-tr-[7px] bg-blue-600 transition-all duration-300 md:h-24 md:w-36",
  top: "absolute top-[-14px] h-4 w-10 rounded-t-[7px] bg-blue-600 shadow-md md:top-[-16px] md:h-5 md:w-14",
  middle:
    "absolute inset-0 m-auto h-5/6 w-11/12 skew-x-[0deg] scale-y-[1] transform rounded-lg bg-blue-100 shadow-md transition-transform duration-300 group-hover:translate-y-[-8px] group-hover:skew-x-[-5deg] md:group-hover:translate-y-[-12px]",
  bottom:
    "absolute inset-0 origin-bottom-right skew-x-[0deg] scale-y-[1] transform rounded-[7px] bg-blue-500 transition-transform duration-300 group-hover:skew-x-[-10deg] group-hover:scale-y-[0.85]",
};
