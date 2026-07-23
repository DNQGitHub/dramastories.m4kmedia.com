export async function resolvePromise<T>(promise: Promise<T>) {
  try {
    const result = await promise;
    return [result, null] as const;
  } catch (error) {
    console.error("Error resolving promise:", JSON.stringify(error, null, 2));
    return [null, error] as const;
  }
}
