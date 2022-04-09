import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import axios from 'axios'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products,setProducts] = useState<ProductProps[]>()

  const getData = async ()=>{
    const response = await axios.get('http://localhost:3001/products')
    setProducts(response.data)    
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products?.map(element => {
          return <Product {...element} />
        })}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
