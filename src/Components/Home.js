import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";
import Carousel from "./Carousel"
import images from "./images.js"
import Footer from "./Footer.js"
function Home() {
  const [products, setProducts] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);

  

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner1.png" alt="" height="200px" />
        <img src="./banner1.png" alt=""  />
      </Banner><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="App">
            <Carousel images={images} />
        </div><br/><br/><br/><br/><br/><br/><br/>
        
      <Main>
        {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}
      </Main><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer>

      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  height:40px;
  img {
    width: 100%;
    

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home;
