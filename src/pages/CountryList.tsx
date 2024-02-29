import styled from 'styled-components';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

import { CountryCard } from '../components/CountryCard';
import { CountrySearchForm } from '../components/CountrySearchForm';
import { Country } from '../country.d';

async function fetcher(url: string) {
	return fetch(url).then((res) => res.json());
}

const CountriesList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2em;
	padding: 2em;
	border-radius: 5px;
`;

const CountriesListItem = styled.li``;

export function CountryList() {
	const navigate = useNavigate();
	const navigateToCountry = (countryName: string) => navigate(countryName);

	const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/all`, fetcher);
	if (isLoading) return <p>Loading...</p>;

	const countries = data as Country[];
	return (
		<>
			<CountrySearchForm />
			<CountriesList>
				{countries.slice(0, 20).map(({ capital, flags: { svg: flag }, name: { common: name }, population, region }, index: number) => (
					<CountriesListItem
						key={index}
						onClick={() => navigateToCountry(name)}
					>
						<CountryCard
							capital={capital[0]}
							flag={flag}
							name={name}
							population={population}
							region={region}
						/>
					</CountriesListItem>
				))}
			</CountriesList>
		</>
	);
}
