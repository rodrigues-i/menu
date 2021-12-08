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

	@media screen and (max-width: 375px) {
		article {
			width: 100%;
		}

		img {
			margin-bottom: 0.5rem;
			width: 80%;
		}

		h4 {
			font-size: 1.3rem;
		}

		p {
			margin-top: 0.5rem;
			font-size: 1.1rem;
			text-align: center;
			line-height: 1.4rem;
		}

	}

	@media screen and (max-width: 768px) {
		article {
			width: 100%;
		}

		img {
			height: 172.03px;
		}

		p {
			margin-bottom: 4rem;
		}
	}
`;

export default Wrapper;