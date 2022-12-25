import {
    ImgWrapper,
    Price,
    PriceContainer,
    SubTitle,
    TextContainer,
    Title,
    TotalAmount,
    Wrapper,
  } from './CheckoutCard.styled';
  
  import { Product } from '../../models';
  import { useContext } from 'react';
  import { ClothingShopContext} from '../useContext';
  
  export const CheckoutCard = ({ name, imageUrl, price, quantity }: Product) => {
    const {products} = useContext(ClothingShopContext);
  
  
    return (
      <Wrapper>
        <ImgWrapper background={imageUrl}>
        </ImgWrapper>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>Quantity: {quantity}</SubTitle>
        </TextContainer>
        <PriceContainer>
          <TotalAmount>Php{quantity * price}.00</TotalAmount>
          <Price> Php{price}.00 per item</Price>
        </PriceContainer>
      </Wrapper>
    );
  };
  
  