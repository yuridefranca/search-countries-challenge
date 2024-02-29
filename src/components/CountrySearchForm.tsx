import styled from 'styled-components';

const FormSearch = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 2em;
`;

const FormSearchInput = styled.input`
	padding: 1rem 2em;
	border: none;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	border-radius: 5px;
	margin-right: 1em;
	width: 300px;
	max-width: 100%;
	background-color: var(--backgroundSecondary);
	color: var(--textPrimary);

	&::placeholder {
		color: var(--textPrimary);
	}
`;

const FormSearchSelect = styled.select`
	padding: 1rem 2em;
	border: none;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	border-radius: 5px;
	background-color: var(--backgroundSecondary);
	color: var(--textPrimary);
	border-right: 16px solid transparent;

	&:hover {
		cursor: pointer;
	}
`;

const FormSearchSelectOption = styled.option`
	color: var(--textPrimary);
	padding: 1rem 2em;
`;

export function CountrySearchForm() {
	const regions = new Set(['Africa', 'America', 'Asia', 'Europe', 'Oceania']);

	return (
		<>
			<FormSearch action="">
				<FormSearchInput
					type="search"
					name="name"
					placeholder="Search for a country..."
				/>
				<FormSearchSelect
					name="regions"
					title="Regions"
				>
					<FormSearchSelectOption value="">Filter by Region</FormSearchSelectOption>
					{[...regions].map((region, index) => (
						<FormSearchSelectOption
							key={index}
							value={region}
						>
							{region}
						</FormSearchSelectOption>
					))}
				</FormSearchSelect>
			</FormSearch>
		</>
	);
}
