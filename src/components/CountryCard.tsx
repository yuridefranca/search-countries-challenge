import styled from 'styled-components';

type CountryCardProps = {
	capital: string;
	flag: string;
	name: string;
	population: number;
	region: string;
};

const CardContainer = styled.div`
	border-radius: 5px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	padding: 4em 2em;
	text-align: center;
	background-color: var(--backgroundSecondary);

	&:hover {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		cursor: pointer;
		scale: 1.1;
	}
`;

const CardImage = styled.img`
	border-radius: 5px;
	margin-bottom: 1em;
	width: 10em;
	height: 6em;
`;

const CardTitle = styled.h4`
	margin-bottom: 1em;
	font-size: 1.3em;
	font-weight: var(--fontExtraBold);
`;

const CardDetails = styled.ul`
	list-style: none;
	padding: 0;
	width: fit-content;
	margin: 0 auto;
	text-align: left;
	font-weight: var(--fontNormal);
`;

const CardDetailsTitle = styled.span`
	font-weight: var(--fontBold);
`;

export function CountryCard({ capital, flag, name, population, region }: CountryCardProps) {
	return (
		<CardContainer>
			<CardImage
				src={flag}
			/>
			<CardTitle>{name}</CardTitle>
			<CardDetails>
				<li>
					<CardDetailsTitle>Capital:</CardDetailsTitle> {capital}
				</li>
				<li>
					<CardDetailsTitle>Population:</CardDetailsTitle> {population}
				</li>
				<li>
					<CardDetailsTitle>Region:</CardDetailsTitle> {region}
				</li>
			</CardDetails>
		</CardContainer>
	);
}
