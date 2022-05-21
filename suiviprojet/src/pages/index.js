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

    
    fetch(`http://localhost:1337/api/products`)
    .then(res=>res.json())
    .then(data=> {
      console.log(data.data)
      setProducts(data.data)
      setFilteredProducts(data.data)
    })  
    
  }, [])

  
  if (products) {
    filteredProducts = products.filter((product) => {
      if (
        product.attributes.title.toLowerCase().includes(store.state.search) 
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
 
        <div className='cards-products'>


    
    {products && products.map((product) => (
            <ProductCard product={product} /> 
        ))}
          {/* {products? 
          <>
          {filteredProducts && filteredProducts.map((product) => (
                  <ProductCard product={product} /> 
              ))}
          </>
              : <h1> Loading Data
              </h1>
        }
          */}
 
        </div>
        </div>
        </>
  );
}
