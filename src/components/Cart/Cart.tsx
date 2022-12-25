import { useContext } from "react";
import { ClothingShopContext } from "../useContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, ProductsWrap } from "./Cart.styled";
import { Quantity } from "../Quantity";

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);

  return (
    <>
      <Title>Your cart total is Php{total}.00</Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductsWrap><ProductCard {...product} key={index} />
          <Quantity {...product} key={index}></Quantity>
          </ProductsWrap>
        ))}
      
      </ProductsWrapper>
    </>
  );
};