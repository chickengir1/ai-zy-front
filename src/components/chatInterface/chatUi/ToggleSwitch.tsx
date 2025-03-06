import { twMerge } from "tailwind-merge";

interface ToggleSwitchProps {
  isCommandMode: boolean;
  toggleMode: () => void;
}

export default function ToggleSwitch({
  isCommandMode,
  toggleMode,
}: ToggleSwitchProps) {
  const sliderBgClass = isCommandMode ? "bg-[#2DE045]" : "bg-[#CCCCCE]";
  const dotTranslateClass = isCommandMode ? "translate-x-[28px]" : "";

  return (
    <>
      <input
        type="checkbox"
        checked={isCommandMode}
        onChange={toggleMode}
        className="sr-only"
      />
      <span
        className={twMerge(
          "mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200",
          sliderBgClass
        )}
      >
        <span
          className={twMerge(
            "h-6 w-6 rounded-full bg-white duration-200",
            dotTranslateClass
          )}
        ></span>
      </span>
    </>
  );
}
