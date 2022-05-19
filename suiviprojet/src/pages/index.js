import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import TitlePage from "../components/TitlePage";
import AppContext from "../AppContext";




export default function HomePage() {

  const store = useContext(AppContext);
  
  const [products, setProducts] = useState([]);
  var [filteredProducts, setFilteredProducts] = useState([]);
  // const [isLogged, setIslogged] = useState(false);

  useEffect(() => {

    
    fetch(`https://fakestoreapi.com/products/`)
    .then(res=>res.json())
    .then(data=> {
      setProducts(data)
      setFilteredProducts(data)
    })  
    
  }, [])

  
  if (products) {
    filteredProducts = products.filter((product) => {
      if (
        product.title.toLowerCase().includes(store.state.search) 
        // product.tags.toLowerCase().includes(store.state.search)
      ) {
        console.log(product);
        return product;
        
      }
      return null;
    });
  }


  
  return (
    <>

    <div className="home_page">
      
  
        {/* <TitlePage title="Shop"  /> */}
       
 
        <div className='cards-products'>

    {/* {filteredProducts && (
      <ProductCard products />
    )} */}

    
    {filteredProducts && filteredProducts.map((product) => (
            <ProductCard product={product} /> 
        ))}
         
 
        </div>
        </div>
        </>
  );
}
