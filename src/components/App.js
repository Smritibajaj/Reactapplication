import React from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Bodymain from './Bodymain';
import catalog from '../catalog.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category : catalog.data,
      shouldHide : false,
      selectedCategory:[]};
  }
  render() {
    return (
      <div className="App">
        <Header  history={this.props.history} category={this.state.category} selectedCategory={this.state.selectedCategory}/>
          <Bodymain />
          <Footer> </Footer>
      </div>
    );
  }
}

export default App;
