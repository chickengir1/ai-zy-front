import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import SelectWrapper from "../../ui/select/SelectWrapper";

interface TabbedFormInputProps {
  form: { title: string; tag: string; priority: string };
  tags: string[];
  priorities: string[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function TabbedFormInput({
  form,
  tags,
  priorities,
  onChange,
}: TabbedFormInputProps) {
  const [activeTab, setActiveTab] = useState<"title" | "tag" | "priority">(
    "title"
  );
  function getTabClassName(tab: "title" | "tag" | "priority") {
    return `py-3 transition-all duration-200 ${
      activeTab === tab
        ? "font-semibold border border-indigo-600 rounded-md bg-white text-indigo-600"
        : "text-gray-500 hover:text-gray-700"
    }`;
  }
  function handleTabChange(tab: "title" | "tag" | "priority"): () => void {
    return function (): void {
      setActiveTab((prev) => (prev === tab ? prev : tab));
    };
  }

  function renderOptions(items: string[]) {
    return items.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  }
  const tabVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <div>
      <div className="grid w-full grid-cols-3 rounded-md bg-[#F1F5F9]">
        <button
          onClick={handleTabChange("title")}
          className={getTabClassName("title")}
        >
          내용
        </button>
        <button
          onClick={handleTabChange("tag")}
          className={getTabClassName("tag")}
        >
          태그
        </button>
        <button
          onClick={handleTabChange("priority")}
          className={getTabClassName("priority")}
        >
          우선순위
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          layout
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="mt-4"
        >
          {activeTab === "title" && (
            <input
              type="text"
              name="title"
              placeholder="투두리스트 내용을 입력하세요"
              value={form.title}
              onChange={onChange}
              className={twMerge(
                SidebarClassesStyles.inputClasses,
                SidebarClassesStyles.listClasses,
                SidebarClassesStyles.inputFocus
              )}
            />
          )}
          {activeTab === "tag" && (
            <SelectWrapper>
              <select
                name="tag"
                value={form.tag}
                onChange={onChange}
                className={twMerge(
                  "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
                  "transition-all duration-200 ease-in-out",
                  "hover:border-gray-400",
                  SidebarClassesStyles.inputClasses,
                  SidebarClassesStyles.listClasses,
                  SidebarClassesStyles.inputFocus
                )}
              >
                <option value="">태그를 선택하세요</option>
                {renderOptions(tags)}
              </select>
            </SelectWrapper>
          )}

          {activeTab === "priority" && (
            <SelectWrapper>
              <select
                name="priority"
                value={form.priority}
                onChange={onChange}
                className={twMerge(
                  "w-full appearance-none px-4 py-2 pr-10 text-gray-700",
                  "transition-all duration-200 ease-in-out",
                  "hover:border-gray-400",
                  SidebarClassesStyles.inputClasses,
                  SidebarClassesStyles.listClasses,
                  SidebarClassesStyles.inputFocus
                )}
              >
                <option value="">우선순위를 선택하세요</option>
                {renderOptions(priorities)}
              </select>
            </SelectWrapper>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
