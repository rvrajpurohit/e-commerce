import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Item } from "../../component/Item";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // useEffect(()=> {
  //   const fetchProduct = async() => {
  //     setLoading(true);
  //     setProducts(products)
  //     setLoading(false)
  //   };
  //   fetchProduct().catch(console.error)
  // }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Update the products state with the fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) :  <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}
    >
      {products.map((product) => (
        <Item key={product.id} data={product}  />
      ))}
    </div>}
      ;
    </>
  );
};
export { Products };
