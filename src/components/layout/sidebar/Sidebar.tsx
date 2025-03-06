import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useSidebarForm } from "@/hooks/business/sidebar/useSidebarForm";
import { SidebarStyles, UnitStyles } from "@/utils/styles/global";
import InviteSection from "./InviteSection";
import ProjectForm from "./ProjectForm";
import SidebarHeader from "./SidebarHeader";
import TagSelect from "./TagSelect";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { handlers } = useSidebarForm({
    onClose,
  });
  const { handleSubmit } = handlers;

  return (
    <AnimatePresence>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <motion.div
            className={SidebarStyles.backdropClasses}
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={SidebarStyles.sidebarClasses}
          >
            <SidebarHeader onClose={onClose} />
            <div className="flex flex-col gap-4 p-4">
              <ProjectForm onClose={onClose} />
              <TagSelect onClose={onClose} />
              <InviteSection onClose={onClose} />
              <button type="submit" className={twMerge(UnitStyles.button)}>
                제출
              </button>
            </div>
          </motion.div>
        </form>
      )}
    </AnimatePresence>
  );
}
