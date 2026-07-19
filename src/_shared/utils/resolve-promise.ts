export async function resolvePromise<T>(promise: Promise<T>) {
  try {
    const result = await promise;
    return [result, null] as const;
  } catch (error) {
    console.error("Error resolving promise:", error);
    return [null, error] as const;
  }
}
