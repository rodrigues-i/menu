import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	
	article {
		width: 50%;
		display: flex;
		margin-bottom: 3.3rem;
	}

	img {
		width: 40%;
		height: 9.5rem;
		border: 4px solid lightblue;
	}

	.text {
		display: flex;
		justify-content: space-around;
		flex: 1;
		flex-wrap: wrap;
		padding: 0 0.7rem 0 1.3rem;
	}

	h4 {
		font-size: 1.1rem;
		color: #102a42;
		text-transform: capitalize;
		flex: 1;
	}

	.price {
		color: #c59d5f;
		text-align: right;
	}

	p {
		font-size: 1rem;
		margin-bottom: 1.5rem;
		display: block;
	}

	p:first-letter {
		text-transform: uppercase;
	}
`;

export default Wrapper;