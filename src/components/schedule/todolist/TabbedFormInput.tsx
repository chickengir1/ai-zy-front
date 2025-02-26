import { AnimatePresence, motion } from "framer-motion";
import { tabVariants } from "@/utils/helpers/todolistHelpers";
import { useTabbedFormInput } from "@/hooks/ui/todolist/useTabbedFormInput";
import { TabbedVariants } from "./TabbedVariants";

export interface TabbedFormInputProps {
  tags: string[];
  priorities: string[];
}

export default function TabbedFormInput({
  tags,
  priorities,
}: TabbedFormInputProps) {
  const { activeTab, getTabClassName, handleTabChange } = useTabbedFormInput();

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
          <TabbedVariants
            activeTab={activeTab}
            tags={tags}
            priorities={priorities}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
