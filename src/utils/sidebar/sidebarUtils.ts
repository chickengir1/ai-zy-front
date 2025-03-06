export function validateField(
  value: string,
  { validator, errorMessage, validStyles, invalidStyles }: Validation.Options
): Validation.Field {
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
