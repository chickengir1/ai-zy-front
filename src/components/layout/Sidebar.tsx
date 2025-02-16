import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

interface SidebarFormProps {
  tag: string[];
  projectName: string;
  projectDescription: string;
  projectTag: string;
  inviteEmail: string;
  invitedTeamMembers: string[];
}

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  const tag = ["태그1", "태그2", "태그3"];
  const [sidebarForm, setSidebarForm] = useState<SidebarFormProps>({
    tag: [],
    projectName: "",
    projectDescription: "",
    projectTag: "",
    inviteEmail: "",
    invitedTeamMembers: [],
  });

  function handleInvite() {
    if (sidebarForm.inviteEmail.trim() !== "") {
      setSidebarForm({
        ...sidebarForm,
        invitedTeamMembers: [
          ...sidebarForm.invitedTeamMembers,
          sidebarForm.inviteEmail.trim(),
        ],
      });
    }
  }

  function handleRemoveMember(email: string) {
    setSidebarForm({
      ...sidebarForm,
      invitedTeamMembers: sidebarForm.invitedTeamMembers.filter(
        (member) => member !== email
      ),
    });
  }

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
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
            className="fixed right-0 top-0 z-50 h-full w-96 bg-white shadow-lg"
          >
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-bold">프로젝트 생성</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="rounded bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
              >
                닫기
              </button>
            </div>

            {/* 폼 영역 */}
            <div className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="projectName"
                  className="mb-1 block text-sm font-medium"
                >
                  프로젝트 이름
                </label>
                <input
                  id="projectName"
                  type="text"
                  placeholder="프로젝트 이름을 입력하세요"
                  className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none"
                  value={sidebarForm.projectName}
                  onChange={(e) =>
                    setSidebarForm({
                      ...sidebarForm,
                      projectName: e.target.value,
                    })
                  }
                />
              </div>

              {/* 프로젝트 설명 입력 */}
              <div className="mb-4">
                <label
                  htmlFor="projectDescription"
                  className="mb-1 block text-sm font-medium"
                >
                  프로젝트 설명
                </label>
                <textarea
                  id="projectDescription"
                  placeholder="프로젝트 설명을 입력하세요"
                  className="h-[150px] w-full resize-none rounded border border-gray-300 p-2 text-sm focus:outline-none"
                  value={sidebarForm.projectDescription}
                  onChange={(e) =>
                    setSidebarForm({
                      ...sidebarForm,
                      projectDescription: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="projectTag"
                  className="mb-1 block text-sm font-medium"
                >
                  태그
                </label>
                <select
                  id="projectTag"
                  className="w-full rounded border border-gray-300 p-2 text-sm focus:outline-none"
                  value={sidebarForm.projectTag}
                  onChange={(e) =>
                    setSidebarForm({
                      ...sidebarForm,
                      projectTag: e.target.value,
                    })
                  }
                >
                  {tag.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              {/* 팀원 초대 입력 */}
              <div className="mb-4">
                <label
                  htmlFor="inviteEmail"
                  className="mb-1 block text-sm font-medium"
                >
                  팀원 초대
                </label>
                <div className="flex">
                  <input
                    id="inviteEmail"
                    type="email"
                    placeholder="프로젝트에 팀원을 초대하세요"
                    className="w-full rounded-l border border-r-0 border-gray-300 p-2 text-sm focus:outline-none"
                    value={sidebarForm.inviteEmail}
                    onChange={(e) =>
                      setSidebarForm({
                        ...sidebarForm,
                        inviteEmail: e.target.value,
                      })
                    }
                  />
                  <button
                    type="button"
                    onClick={handleInvite}
                    className="rounded-r bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                  >
                    초대
                  </button>
                </div>
              </div>

              {/* 초대된 팀원 리스트 */}
              {sidebarForm.invitedTeamMembers.length > 0 && (
                <div className="mb-4 max-h-[200px] overflow-y-auto">
                  <p className="mb-2 text-sm font-medium">초대된 팀원</p>
                  <ul className="space-y-2">
                    {sidebarForm.invitedTeamMembers.map((member) => (
                      <li
                        key={member}
                        className="flex items-center justify-between rounded border border-gray-200 p-2 text-sm"
                      >
                        <span>{member}</span>
                        <button
                          onClick={() => handleRemoveMember(member)}
                          className="rounded bg-red-100 px-2 py-1 text-red-600 hover:bg-red-200"
                        >
                          X
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
