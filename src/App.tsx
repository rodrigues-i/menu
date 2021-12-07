import React from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';
import data from './data';
import GlobalStyle from './GlobalStyle';

interface IState {
  menuItems: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[],
  categories: string[]
}

const allCategories = [ 'all', ...Array.from(new Set(data.map((item) => item.category)))];

class App extends React.Component<{}, IState>{
  constructor(props: {}) {
    super(props)
    this.state = {
      menuItems: data,
      categories: allCategories
    }
  }

  render() {
    const filterItems = (category: string) => {
      if(category === 'all') {
        this.setState({
          menuItems: data
        });
        return null;
      }

      const newItems = data.filter((item) => item.category === category);
      this.setState({
        menuItems: newItems
      });
    }
    
    return (
      <main>
        <GlobalStyle />
        <Categories categories={this.state.categories} filterItems={filterItems} />
        <Menu menuItems={this.state.menuItems} />
      </main>
    );
  }
}

export default App;