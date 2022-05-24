import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import TitlePage from "../components/TitlePage";
import AppContext from "../AppContext";




export default function HomePage() {

  const store = useContext(AppContext);
  
  const [products, setProducts] = useState([]);
  var [filteredProducts, setFilteredProducts] = useState();
  // const [isLogged, setIslogged] = useState(false);


  useEffect(() => {

    
    fetch(`http://localhost:1337/api/products?populate=*`)
    .then(res=>res.json())
    .then(data=> {
      console.log(data.data)
      setProducts(data.data)
    setFilteredProducts(products)
    })  
    
  }, [])


  

  
  if (products) {
    filteredProducts = products.filter((product) => {
      if (
        product.attributes.title.toLowerCase().includes(store.state.search) &&
        product.attributes.category.toLowerCase() == (store.state.category).toLowerCase() && 
        product.attributes.category.toLowerCase() != "All"
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


    
   
          {filteredProducts && filteredProducts.length > 0? 
          <>
          {filteredProducts.map((product) => (
                  <ProductCard product={product} /> 
              ))}
          </>
              : <>
            {products && products.map((product) => (
                        <ProductCard product={product} /> 
                    ))}
              </>
        }
         
 
        </div>
        </div>
        </>
  );
}
