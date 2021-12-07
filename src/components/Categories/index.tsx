import { Component } from "react";
import HeaderWrapper from './styled';

interface IProps {
	categories: string[];
	filterItems: (category: string) => void;
}

class Categories extends Component<IProps, {}>{

	render() {
		const categories = this.props.categories;
		const handleCategory = this.props.filterItems;
		
		return (
			<HeaderWrapper>
				<h2>Our Menu</h2>
				<div className="underline"></div>
				<div className="filter-btn">
					{categories.map((category) => {
						return (
							<button onClick={() => handleCategory(category)}>{category}</button>
						);
					})}
					</div>
			</HeaderWrapper>
		);
	}
}

export default Categories;