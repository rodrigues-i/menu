import { Component } from "react";

interface IProps {
	categories: string[];
	filterItems: (category: string) => void;
}

class Categories extends Component<IProps, {}>{

	render() {
		const categories = this.props.categories;
		const handleCategory = this.props.filterItems;
		
		return (
			<header>
				<h2>Our Menu</h2>
				{categories.map((category) => {
					return (
						<button onClick={() => handleCategory(category)}>{category}</button>
					);
				})}
			</header>
		);
	}
}

export default Categories;