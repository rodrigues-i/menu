import styled from 'styled-components';

const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;

	h2 {
		font-size: 2.7rem;
		color: #102a42;
	}

	.underline {
		width: 6rem;
		height: 0.23rem;
		background: lightblue;
	}

	button {
		margin: 1.5rem;
		border: none;
		background: none;
		padding: 0.5rem 0.8rem;
		font-size: 1rem;
		cursor: pointer;
		text-transform: capitalize;
		color: #c59d5f;
	}

	button:hover {
		background: #c59d5f;
		color: white;
	}

	.filter-btn {

	}
`;

export default HeaderWrapper;