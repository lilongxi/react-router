import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

const productData = [
{
  id: 1,
  name: 'NIKE Liteforce Blue Sneakers',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
  status: 'Available'
 
},
{
  id: 2,
  name: 'Stylised Flip Flops and Slippers',
  description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
  status: 'Out of Stock'
 
},
{
  id: 3,
  name: 'ADIDAS Adispree Running Shoes',
  description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
  status: 'Available'
},
{
  id: 4,
  name: 'ADIDAS Mid Sneakers',
  description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
  status: 'Out of Stock'
},
 
];

const Product = ({match,data}) => {
	
  var product= data.find(p => p.id == match.params.id);
  var productData;
 
  if(product)
    productData = <div>
      <h3> {product.name} </h3>
      <p>{product.description}</p>
      <hr/>
      <h4>{product.status}</h4>  </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;
 
  return (
    <div>
      <div>
         {productData}
      </div>
    </div>
  )
}


const Products = ({match}) => {
	
	var linkList = productData.map(pro => {
		return (
			<li key={pro.id}>
				<Link to={`${match.url}/${pro.id}`}>
					{pro.name}
				</Link>
			</li>
		)
	})
	
	
	return (

		<div>
			<ul>
				{linkList}
			</ul>
			<Route path={`${match.url}/:id`}  render={ __match__ => <Product data= {productData} {...__match__} />} />
			<Route exact path={match.url}
	            render={() => (
	            <div>Please select a product.</div>
	            )}
	        />
		</div>
	)
	
}

export default Products;