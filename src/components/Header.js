import React from 'react';
import catalog from '../catalog.json';

class Header extends React.Component {
   
   renderList = (e) => {
        e.stopPropagation();
       console.log(e.target.classList);
      let m= e.target.value;
      let p = [...document.querySelectorAll('.abc')];
      if(!e.target.classList.active){
      p[m].classList.add('active');
    }
   }
   
category = React.createRef();
    renderOrder = (key,history) => { 
            const category = this.props.category.locations[key];
            let m = this.props.category.locations[key];
            let b = m.branches;
            return  (<li className="list-item" key={key}  id={key} value={key} category={category} onClick={this.renderList}>{category.name}
             <ul key={key} id={key} className="d-none changeframe abc">
             {b.map(x=> <li className="list-item-1"  onClick={(e) => {
                e.preventDefault();
                this.setState({selectedCategory : x});
                const cateName = x.name;
                this.props.history.push({pathname:`/branch/${cateName}`,state:{selectedCategory : x}})
                }}>{x.name}</li>)}
             </ul>
             </li>)
        }
        
    render() {
        const categories = Object.keys(this.props.category.locations);
        
        return(
            <div>
            <header  className="App-header">
            <a className="App-header-com">Rental Management System</a> 
            </header>

            <div  className="App-header-com-1">
            <button className="btn">Select Location</button>
            <div className="mi">
             <ul className="list">
            {categories.map(this.renderOrder)}
            </ul> 
            </div>
            </div>
            </div>
        );

    }
}
export default Header;