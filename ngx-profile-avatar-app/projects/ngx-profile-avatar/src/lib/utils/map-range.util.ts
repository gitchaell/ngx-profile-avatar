import { clamp } from './clamp.util';

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
