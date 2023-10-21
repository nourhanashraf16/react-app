import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setLoading(false);
        setProducts((prev) => [...prev, ...res.data]);
        console.log(products); //[]
      } catch (error) {
        setLoading(false);
        setError("error from server");
      }
    };
    loadProducts();
  }, []);
  return [products, loading, error];
};
