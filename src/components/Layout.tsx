import { Header } from './Header';

interface ComponentProps {
	children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: ComponentProps): JSX.Element {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
