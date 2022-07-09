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

export const clamp = ({ value, min, max }: {
	value: number;
	min: number;
	max: number;
}) => {
	return Math.min(Math.max(value, min), max);
};

export const lerp = ({ start, end, time = 0.05 }: {
	start: number;
	end: number;
	time?: number;
}) => {
	return start * (1 - time) + end * time;
};

export const mapRange = ({ value, inMin, inMax, outMin, outMax }: {
	value: number,
	inMin: number,
	inMax: number,
	outMin: number,
	outMax: number
}) => {
	value = clamp({ value, min: inMin, max: inMax });
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
