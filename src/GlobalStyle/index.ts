import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	main {
		margin: auto;
		width: 90vw;
		display: flex;
		flex-direction: column;
		margin-bottom: 5rem;
		margin-top: 5rem;
	}

	@media screen and (max-width: 375px) {
		main {
			margin-top: 1.3rem;
		}

		.filter-btn {
			display: flex;
			flex-direction: column;
			padding-top: 1rem;
		}

		.filter-btn button {
			margin: 0.5rem;
			font-size: 1.2rem;
		}

		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		article {
			display: flex;
			flex-direction: column;
		}

		img {
			align-self: center;
		}

		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

	}

	@media screen and (max-width: 768px) {
		main {
			margin: 1rem auto;
		}

		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

	}
`;

export default GlobalStyle;