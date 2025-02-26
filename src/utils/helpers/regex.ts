interface FieldStyles {
  button: string;
  input?: string;
}

interface ValidationOptions {
  validator: (value: string) => boolean;
  errorMessage: string;
  validStyles: FieldStyles;
  invalidStyles: FieldStyles;
}

export interface FieldValidation {
  isValid: boolean;
  hasInput: boolean;
  showError: boolean;
  errorMessage: string;
  styles: FieldStyles;
}

export function validateField(
  value: string,
  { validator, errorMessage, validStyles, invalidStyles }: ValidationOptions
): FieldValidation {
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
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function itemList<T extends { display: string }>(items: T[]) {
  return items.map((item) => ({
    ...item,
    searchTerm: item.display,
    displayText: item.display,
  }));
}
