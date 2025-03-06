import { AnimatePresence, motion } from "framer-motion";
import { useTodolist } from "@/hooks/business/todolist/useTodolist";
import { tabVariants } from "@/utils/todolist/todolistUtils";
import { TabbedVariants } from "./TabbedVariants";

export default function TodoInputTabs() {
  const { handler, state } = useTodolist();
  const { handleTabChange, getTabClassName } = handler;
  const { activeTab } = state;

  return (
    <div>
      <div className="grid w-full grid-cols-2 rounded-md bg-[#F1F5F9]">
        <button
          onClick={handleTabChange("title")}
          className={getTabClassName("title")}
        >
          내용
        </button>
        <button
          onClick={handleTabChange("state")}
          className={getTabClassName("state")}
        >
          태그
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
          <TabbedVariants activeTab={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
