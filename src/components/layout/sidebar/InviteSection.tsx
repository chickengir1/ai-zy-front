import InvitedList from "./InvitedList";
import { useValidation } from "@/hooks/utility/useValidation";
import { SidebarClassesStyles } from "@/utils/styles/globalStyeld";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";
interface InviteSectionProps {
  inviteEmail: string;
  invitedTeamMembers: string[];
  setInviteEmail: (value: string) => void;
  getInvitedMembers: (members: string[]) => void;
}

// NOTE : useInviteSection 훅으로 분리
export default function InviteSection({
  inviteEmail,
  invitedTeamMembers,
  setInviteEmail,
  getInvitedMembers,
}: InviteSectionProps) {
  const validation = useValidation({ email: inviteEmail });

  function handleInvite() {
    const trimmedEmail = inviteEmail.trim();

    if (!trimmedEmail) {
      return;
    }

    if (invitedTeamMembers.includes(trimmedEmail)) {
      toast.error("이미 초대된 이메일입니다.");
      return;
    }

    getInvitedMembers([...invitedTeamMembers, trimmedEmail]);
    setInviteEmail("");
  }

  function handleRemoveMember(email: string) {
    getInvitedMembers(invitedTeamMembers.filter((member) => member !== email));
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInviteEmail(e.target.value.trim());
  }

  return (
    <div>
      <div>
        <p className={twMerge(SidebarClassesStyles.titleClasses)}>팀원 초대</p>
        <div className="flex flex-col">
          <div className={twMerge(SidebarClassesStyles.listClasses, "flex")}>
            <input
              type="email"
              placeholder="프로젝트에 팀원을 초대하세요"
              className={twMerge(
                SidebarClassesStyles.inputClasses,
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
                SidebarClassesStyles.buttonClasses,
                validation.email.styles.button
              )}
            >
              초대
            </button>
          </div>
          <div className="h-4">
            {validation.email.showError && (
              <p className={twMerge(SidebarClassesStyles.errorClasses)}>
                {validation.email.errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <p className={twMerge(SidebarClassesStyles.titleClasses, "mt-2")}>
        초대된 팀원
      </p>
      <div
        className={twMerge(
          SidebarClassesStyles.listClasses,
          "h-[150px] border-[#E4E4E7] bg-[#F9FAFB] p-2"
        )}
      >
        <InvitedList
          invitedTeamMembers={invitedTeamMembers}
          onRemoveMember={handleRemoveMember}
        />
      </div>
    </div>
  );
}
