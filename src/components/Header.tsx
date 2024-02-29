import styled from 'styled-components';

const HeaderBar = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2em;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	background-color: var(--backgroundSecondary);
`;

const HeaderTitle = styled.h2`
	font-size: 1.5em;
	font-weight: var(--fontExtraBold);
`;

const DarkModeToggler = styled.span`
	cursor: pointer;
	font-weight: var(--fontBold);
`;

export function Header() {
	const handleDarkMode = () => {
		document.body.classList.toggle('dark');
	};

	return (
		<HeaderBar>
			<HeaderTitle>Where in the world?</HeaderTitle>
			<DarkModeToggler onClick={handleDarkMode}>Dark Mode</DarkModeToggler>
		</HeaderBar>
	);
}
