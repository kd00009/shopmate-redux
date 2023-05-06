import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [incart, setIncart] = useState(false);
  const products = useSelector((state) => state.cartState.cartList);
  const { name, price, image } = product;

  useEffect(() => {
    const productInCart = products.find((item) => item.id === product.id);
    if (productInCart) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [product.id, products]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {incart ? (
          <button className="remove" onClick={() => dispatch(remove(product))}>
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
