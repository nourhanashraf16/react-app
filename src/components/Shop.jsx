import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { Loading } from "./Loading";
import { Product } from "./Product";
export const Shop = () => {
  const [products, loading, error] = useGetProducts();

  return (
    <section className="products py-5">
      <div className="container">
        <Loading loading={loading} error={error}>
          <div className="row">
            {products &&
              products.map((ele) => <Product key={ele.id} product={ele} />)}
          </div>
        </Loading>
      </div>
    </section>
  );
};
