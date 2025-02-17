import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import SidebarHeader from "./SidebarHeader";
import ProjectForm from "./ProjectForm";
import TagSelect from "./TagSelect";
import InviteSection from "./InviteSection";
import Toastify from "@/components/ui/toast/Toastify";
import { UnitClasses } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

interface SidebarFormProps {
  projectName: string;
  projectDescription: string;
  projectTag: string;
  invitedTeamMembers: string[];
}

// NOTE : props로 받아오기
const tag = ["태그1", "태그2", "태그3"];

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  // NOTE : useSidebarFormData 훅으로 분리
  const [inviteEmail, setInviteEmail] = useState<string>("");
  const [sidebarFormData, setSidebarFormData] = useState<SidebarFormProps>({
    projectName: "",
    projectDescription: "",
    projectTag: tag[0],
    invitedTeamMembers: [],
  });

  function getInvitedMembers(members: string[]) {
    setSidebarFormData((prev) => ({
      ...prev,
      invitedTeamMembers: members,
    }));
  }

  function getTag(tag: string) {
    setSidebarFormData((prev) => ({
      ...prev,
      projectTag: tag,
    }));
  }

  function handleFormChange(field: string) {
    return (value: string) => {
      setSidebarFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  }

  function handleCheckForm() {
    if (
      sidebarFormData.projectName === "" ||
      sidebarFormData.projectDescription === "" ||
      sidebarFormData.projectTag === "" ||
      sidebarFormData.invitedTeamMembers.length === 0
    ) {
      toast.error("모든 필드를 입력해주세요");
    } else {
      toast.success("프로젝트 생성 완료");
      setSidebarFormData({
        projectName: "",
        projectDescription: "",
        projectTag: tag[0],
        invitedTeamMembers: [],
      });
      setInviteEmail("");
      setTimeout(() => {
        setIsSidebarOpen(false);
      }, 1250);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleCheckForm();
    console.log("프로젝트 생성 폼 데이터", sidebarFormData);
  }

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <div>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-white shadow-lg md:w-1/2"
            >
              <SidebarHeader setIsSidebarOpen={setIsSidebarOpen} />
              <div className="flex flex-col gap-4 p-4">
                <ProjectForm
                  projectName={sidebarFormData.projectName}
                  projectDescription={sidebarFormData.projectDescription}
                  setProjectName={handleFormChange("projectName")}
                  setProjectDescription={handleFormChange("projectDescription")}
                />
                <TagSelect
                  tag={tag}
                  selectedTag={sidebarFormData.projectTag}
                  getTag={getTag}
                />
                <InviteSection
                  inviteEmail={inviteEmail}
                  invitedTeamMembers={sidebarFormData.invitedTeamMembers}
                  setInviteEmail={setInviteEmail}
                  getInvitedMembers={getInvitedMembers}
                />
                <button type="submit" className={twMerge(UnitClasses.button)}>
                  제출
                </button>
              </div>
            </motion.div>
          </form>
          <Toastify
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
