import { twMerge } from "tailwind-merge";
import { useSidebarForm } from "@/hooks/business/sidebar/useSidebarForm";
import { useValidation } from "@/hooks/utility/common/useValidation";
import { SidebarStyles } from "@/utils/styles/global";
import InvitedList from "./InvitedList";

export default function InviteSection({ onClose }: Sidebar.SidebarProps) {
  const { formState, inviteHandlers } = useSidebarForm({
    onClose,
  });
  const { inviteEmail } = formState;
  const { handleEmailChange, handleInvite } = inviteHandlers;

  const validation = useValidation({ email: inviteEmail });

  return (
    <div>
      <div>
        <p className={twMerge(SidebarStyles.titleClasses)}>팀원 초대</p>
        <div className="flex flex-col">
          <div className={twMerge(SidebarStyles.listClasses, "flex")}>
            <input
              type="email"
              placeholder="프로젝트에 팀원을 초대하세요"
              className={twMerge(
                SidebarStyles.inputClasses,
                validation.email.styles.input
              )}
              value={inviteEmail}
              onChange={handleEmailChange}
            />
            <button
              type="button"
              onClick={handleInvite}
              disabled={!validation.email.isValid}
              className={twMerge(
                SidebarStyles.buttonClasses,
                validation.email.styles.button
              )}
            >
              초대
            </button>
          </div>
          <div className="h-4">
            {validation.email.showError && (
              <p className={twMerge(SidebarStyles.errorClasses)}>
                {validation.email.errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <p className={twMerge(SidebarStyles.titleClasses, "mt-2")}>초대된 팀원</p>
      <div
        className={twMerge(
          SidebarStyles.listClasses,
          "h-[150px] border-[#E4E4E7] bg-[#F9FAFB] p-2"
        )}
      >
        <InvitedList onClose={onClose} />
      </div>
    </div>
  );
}
