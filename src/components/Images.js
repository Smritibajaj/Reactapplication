import React from 'react';


class Images extends React.Component{
     

render(){
    const appendData  =  this.props.history.location.state.selectedCategory.categories.map(url => 
       { return (<div className="img-contianer">
        <img src={process.env.PUBLIC_URL + `/category/${url.image}`} className="img-cate"/>
        <div className="background-button" onClick={
            (e)=>{
                e.preventDefault();
                this.setState({selectedCategory : url.subcategories});
                const cateName = url.name;
                this.props.history.push({pathname:`/equipment/${cateName}`,state:{selectedCategory : url.subcategories}})
            }
        }><a >{url.name}</a><img className="img-arrow" src={process.env.PUBLIC_URL + '/arrow.png'} /></div>
        </div>)
       });
    return(
        <div className="cont">
        <h1 className="head">Equipment Catalog</h1>
        <div className="img-bcontainer">
        
        {appendData}
        </div>
        </div>
    )
}
}

export default Images;
