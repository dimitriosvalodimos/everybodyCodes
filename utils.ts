export const window = <T>(iter: T[], width: number) => {
	const length = iter.length;

	if (length <= width) return [iter];
	const res: T[][] = [];

	for (let i = 0; i < length; i += width) {
		res.push(iter.slice(i, i + width));
	}

	return res;
};

export const sum = (iter: number[]) =>
	iter.reduce((acc, cur) => (acc += cur), 0);
