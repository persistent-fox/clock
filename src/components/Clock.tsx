import { useEffect, useState } from 'react';
import { S } from './Clock_Styles';

export const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const idInt = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => {
			clearInterval(idInt);
		};
	}, []);

	const seconds = date.getSeconds() * 6;
	const minutes = date.getMinutes() * 6;
	const hours = date.getHours() * 30 + minutes / 12;
	return (
		<S.Clock>
			<S.ArrowPack>
				<S.Hours angle={hours}></S.Hours>
			</S.ArrowPack>
			<S.ArrowPack>
				<S.Minutes angle={minutes}></S.Minutes>
			</S.ArrowPack>
			<S.ArrowPack>
				<S.Seconds angle={seconds}></S.Seconds>
			</S.ArrowPack>
		</S.Clock>
	);
};
