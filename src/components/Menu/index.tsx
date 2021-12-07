import { Component } from "react";
import Wrapper from './styled';

interface IProps {
	menuItems: {
		id: number;
		title: string;
		category: string;
		price: number;
		img: string;
		desc: string
	}[]
}

export default class Menu extends Component<IProps, {}>{

	render() {
		const items = this.props.menuItems;
		return (
			<Wrapper>
				{items.map((item) => {
					const { id, title, category, price, img, desc } = item;
					return (
						<article key={id}>
							<img src={img} alt={title} />
							<div className="text">
								<h4>{title}</h4>
								<h4 className="price">${price}</h4>
								<p>{desc}</p>
							</div>
						</article>
					);
				})}
			</Wrapper>
		);
	}
}