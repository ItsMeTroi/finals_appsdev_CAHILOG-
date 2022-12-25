import { useContext, useState } from "react";
import { Product } from "../../models";
import { CheckoutCard } from "../CheckoutCard";

import { ClothingShopContext } from "../useContext";
import { Labels, PlaceOrder, PriceContainer, ProductsWrapper, Title, Total, TotalAmount, TotalAmountLabel, TotalItems, TotalItemsLabel } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total, totalitems } = useContext(ClothingShopContext);
 
  return (
    <>
    <Title>
         { products.length > 0 ? " Items ready for checkout ": " Empty! Add an item to your cart "}
    </Title>
    <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
      <Total>
      <Labels>
          <TotalAmountLabel>Total Amount:</TotalAmountLabel>
          <TotalItemsLabel>Total Items:</TotalItemsLabel>
        </Labels>
        <PriceContainer>
          <TotalAmount>Php{total}.00</TotalAmount>
          <TotalItems>{totalitems}</TotalItems>
        </PriceContainer>
      </Total>
      <PlaceOrder>Checkout</PlaceOrder>
    </>
  );
};