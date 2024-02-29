import { Header } from './components/Header';

interface ComponentProps {
	children: JSX.Element | JSX.Element[];
}

export function App({ children }: ComponentProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
