export const remap = ({ value, low1, low2, high1, high2 }:
	{
		value: number;
		low1: number;
		low2: number;
		high1: number;
		high2: number;
	}) => {
	return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};