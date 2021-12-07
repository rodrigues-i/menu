import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	main {
		margin: auto;
		border: 1px solid;
		width: 88vw;
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
	}
`;

export default GlobalStyle;