import React from 'react';
import '../css/App.css';
import Header from'./Header';
import Images from './Images';
import Footer from './Footer';
import catalog from '../catalog.json';

class Branch extends React.Component {
    constructor(props) {
    super(props);
    this.state = { category : catalog.data,
      shouldHide : false };
  }

    render(){
        return(
            <div className="App">
            <Header  history={this.props.history} category={this.state.category} selectedCategory={this.state.selectedCategory} />
            <Images  history={this.props.history}/>
            <Footer />
            </div>
        )
    }
}
export default Branch;