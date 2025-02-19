import InvitedList from "./InvitedList";
import { useEmailValidation } from "@/hooks/ui/sidebar/useEmailValidation";
import { SidebarClasses } from "@/utils/styles/globalStyeld";
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
  const validation = useEmailValidation(inviteEmail);

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
        <p className={twMerge(SidebarClasses.titleClasses)}>팀원 초대</p>
        <div className="flex flex-col">
          <div className={twMerge(SidebarClasses.listClasses, "flex")}>
            <input
              type="email"
              placeholder="프로젝트에 팀원을 초대하세요"
              className={twMerge(
                SidebarClasses.inputClasses,
                validation.inputClasses
              )}
              value={inviteEmail}
              onChange={handleEmailChange}
            />
            <button
              type="button"
              onClick={handleInvite}
              disabled={!validation.isEmailValid}
              className={twMerge(
                SidebarClasses.buttonClasses,
                validation.buttonClasses
              )}
            >
              초대
            </button>
          </div>
          <div className="h-4">
            {validation.showError && (
              <p className={twMerge(SidebarClasses.errorClasses)}>
                {validation.errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <p className={twMerge(SidebarClasses.titleClasses, "mt-2")}>
        초대된 팀원
      </p>
      <div
        className={twMerge(
          SidebarClasses.listClasses,
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
