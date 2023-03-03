export function mode(...data: number[]): number[];
export function mode(data: number[]): number[];
export function mode(...args: [number[]] | number[]) {
	const data = args.flat();

	const map: Record<number, number> = {};

	for (const i of data) {
		if (i in map) map[i] += 1;
		else map[i] = 1;
	}

	const greatest = Math.max(...Object.values(map));
	const mode = Object.keys(map).filter(i => map[i] === greatest).map(v => Number(v));

	return mode;
}
