import { useTheme } from 'next-themes';
import * as React from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

export interface ThemeToggleButtonProps {}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = () => {
	const { theme, setTheme } = useTheme();

	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<button
			onClick={() => {
				if (theme === 'dark') {
					setTheme('light');
				} else {
					setTheme('dark');
				}
			}}
			className="rounded-full border border-zinc-500 p-3"
		>
			{theme === 'dark' && <BsMoonStarsFill />}
			{theme === 'light' && <BsSunFill />}
		</button>
	);
};

export default ThemeToggleButton;
