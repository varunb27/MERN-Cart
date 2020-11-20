import React, { useState, useEffect } from "react";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState("");

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      <Row>
        {products.length !== 0 &&
          products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} cl={3}>
                <Product {...product} />
              </Col>
            );
          })}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
