import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5274/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

 
    return (
      <div>
        <ProductList products={products}/>
      </div>
    );
}