import React from 'react';
import '../css/App.css';
import Header from'./Header';
import Images from './Images';
import Footer from './Footer';
import Img from './Img';
import catalog from '../catalog.json';

class SubCategory extends React.Component {
    constructor(props) {
    super(props);
    this.state = { category : catalog.data,
      shouldHide : false };
  }

    render(){
        return(
            <div className="App">
            <Header  history={this.props.history} category={this.state.category} selectedCategory={this.state.selectedCategory} />
            <Img history={this.props.history}/>
            <Footer />
            </div>
        )
    }
}
export default SubCategory;