import  React from 'react';

export default function ProductCard(props) {
  return (
     
    <div className="card" key={props.product.id}>

    <img className='card-image' src={props.product.image}/> 
    
    <h1>{props.product.title}</h1>
    <p className="price">${props.product.price}</p>
    <p>{props.product.description}</p>
    {/* <Link href={`/shop/${props.product.id}`}> */}
    {/* <div><Button text="See product" type="button" class="btn_card rounded_2"/></div> */}
    {/* </Link> */}
</div>

   



  )
}
