import React from 'react';


class Img extends React.Component{
     

render(){
    const appendData  =  this.props.history.location.state.selectedCategory.map(url => 
        { return (<div className="img-contianer">
         <img src={process.env.PUBLIC_URL + `/category/subcategory/${url.image}`} className="img-cate"/>
         <div className="background-button"><a>{url.name}</a><img className="img-arrow" src={process.env.PUBLIC_URL + '/arrow.png'} /></div>
         </div>)
        });
    const breadCrum = this.props.history.location.pathname.split('/');
    const view = breadCrum[2];
    return(
        <div className="cont">
        <div  className="head"><a className="bread" onClick={this.props.history.goBack}>Equipment Catalog / </a><a className="bread">{view}</a></div>
        <div className="img-bcontainer">
        {appendData}
        </div>
        </div>
    )
}
}

export default Img;
