import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({
  _id,
  name,
  image,
  description,
  brand,
  category,
  price,
  rating,
  countInStock,
  numReviews,
}) => {
  return (
    <Card className="my-3 p-3 rounded h-80">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" className="card-img" />
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
