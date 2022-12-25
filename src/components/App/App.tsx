import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ClothingShopContext } from "../useContext";
import { useReducer } from "react";
import {
  add,
  deleteC,
  update,
  addQty,
  totalItems,
  addWL,
  remove,
  initialState,
  shopReducer,
  
  
} from "../useReducer";
import { Product } from "../../models";
import { Wishlist } from "../Wishlist";
import { Checkout } from "../Checkout";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch(add(updatedCart));
  };

  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(deleteC(updatedCart));


  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    let items = 0;
    products.forEach(
      (product: { price: number; quantity: number }) =>
        (total = total + product.price * product.quantity , items = items + product.quantity)
    );

    dispatch(update(total));
    dispatch(totalItems(items));
  };

  const addToWL = (product: Product) => {
    const updatedWL = state.products.concat(product);
    dispatch(addWL(updatedWL));
  };

  const removeToWL = (product: Product) => {
    const updatedWL = state.saved.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );

    dispatch(remove(updatedWL));
  };

  const updateCart = (product: Product, quantity: number) => {
    const updatedCart = state.products.map((items: { name: string }) =>
      items.name === product.name ? { ...items, quantity: quantity } : items
    );
    dispatch(addQty(updatedCart));

    updatePrice(updatedCart);
  };

  const value = {
    totalitems: state.totalitems ,
    total: state.total,
    products: state.products,
    saved: state.saved,
    addToCart,
    removeItem,
    addToWL,
    removeToWL,
    updatePrice,
    updateCart,
  };
  return (
    <ClothingShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Wishlist</Link>
          <Link to="/wishlist">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Wishlist />} />
          <Route path="/wishlist" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Wrapper>
    </ClothingShopContext.Provider>
  );
};