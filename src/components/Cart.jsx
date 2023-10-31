import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  removeAll,
  getTotalPrice,
} from "../redux/slices/cartSlice";
import emptyCart from "../assets/a8373d1b3858a717b184ede20f35f134.jpg";

export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => {
    return store.myCart.cartList;
  });
  const totalPrice = useSelector((store) => {
    return store.myCart.totalPrice;
  });
  const handleRemoveItem = (value) => {
    dispatch(removeFromCart(value));
  };
  const handleIncrementQuantity = (value) => {
    dispatch(incrementQuantity(value));
  };
  const handleDecrementQuantity = (value) => {
    dispatch(decrementQuantity(value));
  };
  const handleRemveAll = () => {
    dispatch(removeAll());
  };
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);

  console.log(products);
  return (
    <>
      <section className="cartList">
        <div className="container">
          {products.length > 0 ? (
            <div className="row">
              <table class="table col-sm-12 col-md-12 col-lg-8">
                <thead>
                  <tr>
                    <th scope="col ">product</th>
                    <th
                      scope="col"
                      className="cart_quantity  cart_head_quantity"
                    >
                      Quantity
                    </th>
                    <th scope="col" className="cart_price">
                      price
                    </th>
                    <th scope="col" className="">
                      Remove
                    </th>
                    <th scope="col" className="cart_subtotal">
                      SubTotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <th>
                          <figure className="cart_img">
                            <img src={product.image} alt="cart_img" />
                          </figure>
                        </th>
                        <td className="cart_quantity">
                          <button
                            className="btn cart_quantity_btn mx-4"
                            onClick={() => handleIncrementQuantity(product.id)}
                          >
                            +
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            className="btn cart_quantity_btn mx-4"
                            onClick={() => handleDecrementQuantity(product.id)}
                          >
                            -
                          </button>
                        </td>
                        <td className="cart_price">${product.price}</td>
                        <td className="cart_removeBtn">
                          <button
                            className="btn cart_remove-btn"
                            onClick={() => handleRemoveItem(product.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              fill="currentColor"
                              class="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                            </svg>
                          </button>
                        </td>
                        <td className="cart_subtotal">${product.subtotal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex align-items-center justify-content-between my-5">
              <p className="text-muted fw-bold">Total price : ${totalPrice.toFixed(2)}</p>
              <button
                className="btn cart_remove-all-btn"
                onClick={() => handleRemveAll()}
              >
                Remove All
              </button>
              </div>
              
            </div>
          ) : (
            <div className="empty-cart d-flex align-items-center justify-content-center">
              <div>
                <figure className="empty-cart_img">
                  <img src={emptyCart} alt="emptycart" />
                </figure>
                <div className="empty-cart_content text-center">
                  <h4>
                    your cart is <span> empty</span>
                  </h4>
                  <p className="text-muted">
                    Must add items on the cart before ypu proceed to check out.{" "}
                  </p>
                  <Link to="/shop" className="btn empty-cart_link">
                    Return to shop
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
