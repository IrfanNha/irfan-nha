"use client";
import { useRef, useState, useEffect } from "react";

interface AgeProps {}

const Age: React.FC<AgeProps> = () => {
	const [age, setAge] = useState<number>(0);
	const prevTimeRef = useRef<number>(0);
	const requestRef = useRef<number>();

	const birthday: Date = new Date("2006-03-20T13:00:00");

	useEffect(() => {
		const animate = (time: number) => {
			if (prevTimeRef.current === 0) {
				prevTimeRef.current = time;
			}
			const deltaTime = time - prevTimeRef.current;
			prevTimeRef.current = time;

			const currentTime: Date = new Date();
			const diff: number = currentTime.getTime() - birthday.getTime();
			const ageInSeconds: number = diff / 1000;
			const ageInYears: number = ageInSeconds / (60 * 60 * 24 * 365.25);

			setAge((prevAge) => {
				const targetAge = ageInYears;
				const smoothness = 0.05;
				const newAge =
					prevAge + (targetAge - prevAge) * smoothness * deltaTime;

				if (prevAge === targetAge) {
					return targetAge;
				}

				if (prevAge < targetAge && newAge > targetAge) {
					return targetAge;
				}

				return newAge;
			});

			requestRef.current = requestAnimationFrame(animate);
		};

		requestRef.current = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(requestRef.current!);
	}, []);

	return <span>{age.toFixed(11)}</span>;
};

export default Age;
