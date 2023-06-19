import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div id="product-list">
      {products.slice(0, 4).map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image">
            <img
              src={`${product.image}?${Date.now()}`}
              alt={product.title}
            />
          </div>
          <div className="product-name">{product.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
