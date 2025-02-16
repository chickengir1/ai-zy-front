import { useMemo } from "react";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useEmailValidation = (email: string) => {
  const validation = useMemo(() => {
    const isEmailValid = validateEmail(email);
    return {
      isEmailValid,
      hasEmailInput: email !== "",
      showError: email !== "" && !isEmailValid,
      errorMessage: "유효하지 않은 이메일 주소입니다.",
      buttonClasses: `${
        isEmailValid
          ? "bg-[#BECCFF] text-[#4E43CE] hover:bg-[#A3B8FF]"
          : "cursor-not-allowed bg-gray-300"
      }`,
      inputClasses: `${email !== "" && !isEmailValid ? "border-red-500" : ""}`,
    };
  }, [email]);

  return validation;
};
