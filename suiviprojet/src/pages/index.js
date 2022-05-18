import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import TitlePage from "../components/TitlePage";
import AppContext from "../AppContext";



export default function HomePage() {


  const [products, setProducts] = useState();
  // const [isLogged, setIslogged] = useState(false);

  useEffect(() => {

    
    fetch(`https://fakestoreapi.com/products/`)
    .then(res=>res.json())
    .then(data=>setProducts(data))  
    
  }, [])
  
  return (
    <>

    <div className="home_page">
      
  
        {/* <TitlePage title="Shop"  /> */}
       
 
        <div className='cards-products'>
               
        {products && products.map((product) => (
            <ProductCard product={product} /> 
        ))}
         


           
       
        </div>
        </div>
        </>
  );
}
