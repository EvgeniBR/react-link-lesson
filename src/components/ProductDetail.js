import React from 'react';
import { Link } from 'react-router-dom';
import store from "../store";


class ProductDetail extends React.Component {
state = {item:[]}

    componentDidMount =() =>{
    const x = parseInt(this.props.match.params.id)  
    const items = store.map((item) => {
        if(item.id === x){
        return (
          <div key={item.id}>
         <h2>{item.title}</h2>
         <img src={item.imageUrl} alt={item.title} />
        <h4>{item.size}</h4>
        <h5>{item.price} USD </h5>
        <Link to="/Products">Back </Link>

          </div>
        );
        }else{return <div key={item.id}></div>}
      });
      this.setState({ item: items });
        
    }
    render() {
        return (
            <div>
               {this.state.item}
            </div>
        );
    }
}

export default ProductDetail;