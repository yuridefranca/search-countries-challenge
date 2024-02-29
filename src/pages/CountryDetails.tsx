import useSWR from 'swr';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Country } from '../country.d';

const BackButton = styled.button`
	background-color: var(--backgroundSecondary);
	border: none;
	border-radius: 5px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	color: var(--text);
	cursor: pointer;
	font-size: 1em;
	padding: 1em 2em;
	margin: 5em 0;
`;

const CountryDetailsContainer = styled.div`
	display: grid;
	gap: 2em;
	grid-template-columns: 1fr 1fr;
	padding: 4em 2em;
	background-color: var(--backgroundSecondary);
	border-radius: 5px;
`;

const FlagImage = styled.img`
	border-radius: 5px;
	margin-bottom: 1em;
	width: 600px;
	height: 380px;
`;

const CountryDetailsTitle = styled.h3`
	font-size: 1.6em;
	font-weight: var(--fontExtraBold);
	margin-top: 1.5em;
	margin-bottom: 0.5em;
`;

const CountryDetailsInfoList = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 1em;
	max-height: 200px;
	padding: 1.5em 0;
	margin-bottom: 1em;
`;

const CountryDetailsInfoListItem = styled.li`
	display: flex;
	flex-wrap: nowrap;
	gap: 5px;
`;

const CountryDetailsInfoTitle = styled.h5`
	font-weight: var(--fontBold);
`;

const CountryBordersList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	align-items: center;
`;

const CountryBordersListItem = styled.li`
	background-color: var(--backgroundSecondary);
	border-radius: 5px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	padding: 0.8em 2em;
`;

async function fetcher(url: string) {
	return fetch(url).then((res) => res.json());
}

export function CountryDetails() {
	const navigate = useNavigate();
	const navigateToHome = () => navigate('/');

	const { countryNameParam } = useParams();
	const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/name/${countryNameParam}`, fetcher);
	if (isLoading) return <p>Loading...</p>;

	const country = data[0] satisfies Country;
	const {
		borders,
		flags,
		name: { common: name },
	} = country;

	console.log('country', country);

	const CARD_DETAILS = [
		{ label: 'Native Name', value: country.name.common },
		{ label: 'Population', value: country.population },
		{ label: 'Region', value: country.region },
		{ label: 'Sub Region', value: country.subregion },
		{ label: 'Capital', value: country.capital[0] },
		{ label: 'Top Level Domain', value: country.tld[0] },
		{ label: 'Currencies', value: Object.keys(country.currencies).join(', ') },
		{ label: 'Languages', value: Object.values(country.languages).join(', ') },
	];

	return (
		<>
			<BackButton onClick={() => navigateToHome()}>Back</BackButton>
			<CountryDetailsContainer>
				<FlagImage
					src={flags.svg}
					alt={flags.alt}
				/>
				<div>
					<CountryDetailsTitle>{name}</CountryDetailsTitle>
					<CountryDetailsInfoList>
						{CARD_DETAILS.map(({ label, value }, index) => (
							<CountryDetailsInfoListItem key={index}>
								<CountryDetailsInfoTitle>{label}:</CountryDetailsInfoTitle> {value}
							</CountryDetailsInfoListItem>
						))}
					</CountryDetailsInfoList>
					<CountryBordersList>
						<li>
							<CountryDetailsInfoTitle>Border Countries:</CountryDetailsInfoTitle>
						</li>
						{borders?.map((country: string, index: number) => (
							<CountryBordersListItem key={index}>{country}</CountryBordersListItem>
						))}
					</CountryBordersList>
				</div>
			</CountryDetailsContainer>
		</>
	);
}

// export function CountryDetails() {
// 	const navigate = useNavigate();
// 	const navigateToHome = () => navigate('/');

// 	const { name } = COUNTRY;
// 	const { data } = useSWR(`https://restcountries.com/v3.1/name/${name}`, fetcher);
// 	console.log('data', data);
// 	const country = data[0];
// 	const { borders, flags } = country;

// 	return (
// 		<>
// 			<BackButton onClick={() => navigateToHome()}>Back</BackButton>
// 			<CountryDetailsContainer>
// 				<FlagImage
// 					src={flags.svg}
// 					alt={flags.alt}
// 				/>
// 				<div>
// 					<CountryDetailsTitle>{name}</CountryDetailsTitle>
// 					<CountryDetailsInfoList>
// 						{CARD_DETAILS.map(({ label, value }, index) => (
// 							<CountryDetailsInfoListItem key={index}>
// 								<CountryDetailsInfoTitle>{label}:</CountryDetailsInfoTitle> {value}
// 							</CountryDetailsInfoListItem>
// 						))}
// 					</CountryDetailsInfoList>
// 					<CountryBordersList>
// 						<li>
// 							<CountryDetailsInfoTitle>Border Countries:</CountryDetailsInfoTitle>
// 						</li>
// 						{borders.map((country: string, index: number) => (
// 							<CountryBordersListItem key={index}>{country}</CountryBordersListItem>
// 						))}
// 					</CountryBordersList>
// 				</div>
// 			</CountryDetailsContainer>
// 		</>
// 	);
// }
