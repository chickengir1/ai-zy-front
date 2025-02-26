function getMissingFields(formData: Sidebar.SidebarFormProps) {
  const requiredFields = [
    { field: "title", name: "프로젝트 이름" },
    { field: "description", name: "프로젝트 설명" },
  ];

  const missingFields = requiredFields.filter(({ field }) => {
    const value = formData[field as keyof Sidebar.SidebarFormProps];
    return typeof value === "string" && !value.trim();
  });

  const missingFieldNames = missingFields.map(({ name }) => name);

  return missingFieldNames;
}

export function validateSidebarForm(
  formData: Sidebar.SidebarFormProps,
  showError: (message: string) => void
): boolean {
  const missingFields = getMissingFields(formData);

  if (formData.invitedTeamMembers.length === 0) {
    missingFields.push("팀원 초대");
  }

  if (missingFields.length > 0) {
    showError("모든 필드를 입력해주세요");
    return false;
  }

  return true;
}

export function validateEmail(
  inviteEmail: string,
  invitedTeamMembers: string[],
  showError: (message: string) => void
) {
  const trimmedEmail = inviteEmail.trim();

  if (!trimmedEmail) {
    return false;
  }

  if (invitedTeamMembers.includes(trimmedEmail)) {
    showError("이미 초대된 이메일입니다.");
    return false;
  }

  return true;
}
