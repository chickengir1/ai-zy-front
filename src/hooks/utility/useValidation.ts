import {
  FieldValidation,
  validateField,
  validateEmail,
} from "@/utils/helpers/regex";

export interface ValidationResult {
  email: FieldValidation;
}

export function useValidation(fields: { email: string }): ValidationResult {
  const validStyles = {
    button: "bg-[#BECCFF] text-[#4E43CE] hover:bg-[#A3B8FF] font-semibold",
    input: "bg-gray-100",
  };

  const invalidStyles = {
    button: "cursor-not-allowed bg-gray-300 font-semibold",
  };

  return {
    email: validateField(fields.email || "", {
      validator: validateEmail,
      errorMessage: "유효하지 않은 이메일 주소입니다.",
      validStyles,
      invalidStyles,
    }),
  };
}
