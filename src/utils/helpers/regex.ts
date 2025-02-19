interface FieldStyles {
  button: string;
  input?: string;
}

export interface FieldValidation {
  isValid: boolean;
  hasInput: boolean;
  showError: boolean;
  errorMessage: string;
  styles: FieldStyles;
}

interface ValidationOptions {
  validator: (value: string) => boolean;
  errorMessage: string;
  validStyles: FieldStyles;
  invalidStyles: FieldStyles;
}

export const validateField = (
  value: string,
  { validator, errorMessage, validStyles, invalidStyles }: ValidationOptions
): FieldValidation => {
  const isValid = validator(value);
  const hasInput = value.trim() !== "";
  const showError = hasInput && !isValid;

  return {
    isValid,
    hasInput,
    showError,
    errorMessage: showError ? errorMessage : "",
    styles: isValid ? validStyles : invalidStyles,
  };
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
