export function mode(...data: number[]): number;
export function mode(data: number[]): number;
export function mode(...args: [number[]] | number[]) {
	const data = args.flat();

	const map: Record<string, number> = {};

	for (const i of data) {
		if (i in map) map[i] += 1;
		else map[i] = 1;
	}

	const greatest = Math.max(...Object.values(map));
	const mode = Number(Object.keys(map).find((i) => map[i] === greatest)!);

	return mode;
}
