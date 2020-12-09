import React, { useEffect } from "react";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword, pageNumber = 1 } = useParams();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <React.Fragment>
      {!keyword && <ProductCarousel />}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <React.Fragment>
          <Row>
            {products.length !== 0 &&
              products.map((product) => {
                return (
                  <Col
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                    className="align-item-stetch d-flex"
                  >
                    <Product {...product} />
                  </Col>
                );
              })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
