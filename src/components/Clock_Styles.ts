import styled from 'styled-components';
import srcImg from './../assets/clock.png';
import srcSign from './../assets/sign.png';

const Clock = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 400px;
	background: url(${srcImg}) no-repeat center center/cover, url(${srcSign}) no-repeat center center;
	background-size: cover;
	box-shadow: 0 -15px 15px rgb(20 68 28 / 27%), inset 0 -15px 15px rgb(116 154 123 / 27%),
		0 15px 15px rgb(20 68 28 / 27%), inset 0 15px 15px rgb(116 154 123 / 27%);
	border-radius: 50%;
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background-color: #000;
		z-index: 5;
	}
`;

const ArrowPack = styled.div`
	position: absolute;
	span {
		display: flex;
		justify-content: center;
		position: absolute;
		border-radius: 50%;
		/* transform: translate(-50%, -50%); */
	}
`;

type TimeProps = {
	angle: number;
};

const Hours = styled.span<TimeProps>`
	width: 160px;
	height: 160px;
	transform: translate(-50%, -50%) rotateZ(${props => props.angle}deg);
	&::before {
		content: '';
		position: absolute;
		width: 8px;
		height: 90px;
		background-color: #000;
		border-radius: 6px 6px 0 0;
		z-index: 2;
	}
`;
const Minutes = styled.span<TimeProps>`
	width: 210px;
	height: 210px;
	transform: translate(-50%, -50%) rotateZ(${props => props.angle}deg);
	&::before {
		content: '';
		position: absolute;
		width: 4px;
		height: 100px;
		background-color: #000;
		border-radius: 6px 6px 0 0;
		z-index: 3;
	}
`;
const Seconds = styled.span<TimeProps>`
	width: 270px;
	height: 270px;
	transform: translate(-50%, -50%) rotateZ(${props => props.angle}deg);
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 180px;
		background-color: #000;
		border-radius: 6px 6px 0 0;
		z-index: 4;
	}
`;

export const S = {
	Clock,
	ArrowPack,
	Hours,
	Minutes,
	Seconds,
};
