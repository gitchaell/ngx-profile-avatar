export const lerp = ({ start, end, time = 0.05 }: {
	start: number;
	end: number;
	time?: number;
}) => {
	return start * (1 - time) + end * time;
};