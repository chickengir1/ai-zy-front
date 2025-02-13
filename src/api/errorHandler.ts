export function handleApiCall<T extends Exclude<unknown, null | undefined>>(
  apiCall: Promise<T>
): Promise<T>;

export function handleApiCall<T extends Exclude<unknown, null | undefined>, E>(
  apiCall: Promise<T>,
  onError: (error: Error) => E
): Promise<T | E>;

export function handleApiCall<T extends Exclude<unknown, null | undefined>, E>(
  apiCall: Promise<T>,
  onError?: (error: Error) => E
): Promise<T | E> {
  return apiCall.catch((error: unknown) => {
    const cause = error instanceof Error ? error : new Error(String(error));
    const customError = new Error(`API 요청 실패 - ${cause.message}`, {
      cause,
    });

    if (onError) {
      return onError(customError);
    }
    throw customError;
  });
}
