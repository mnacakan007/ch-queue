export function replicateArray<T>(array: T[], n: number): T[] {
	// Use the `Array.from` method to create an array with `n` copies of `array`
	return Array.from({ length: n }, () => [...array]).flat();
}
