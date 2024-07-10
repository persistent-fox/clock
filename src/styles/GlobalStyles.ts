import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: ${props => props.theme.colors.secondary};
	}
`;
