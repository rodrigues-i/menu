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
  }[]
}

class App extends React.Component<{}, IState>{
  constructor(props: {}) {
    super(props)
    this.state = {
      menuItems: data
    }
  }

  render() {
    
    return (
      <main>
        <GlobalStyle />
        <Categories />
        <Menu menuItems={this.state.menuItems} />
      </main>
    );
  }
}

export default App;