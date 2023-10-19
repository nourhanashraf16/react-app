import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const Product = (props) => {
    console.log(props.product)
    
  return (
    <div className='col-sm-12 col-md-6 col-lg-4 product_item'>
            <Card >
            <Link to={`/shop/${props.product.id}`}>
            <Card.Img variant="top" src={props.product.image}/>
            </Link>
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text className='text-muted'> {props.product.description}</Card.Text>
            <Card.Text className='text-muted'> {`$ ${props.product.price}`}</Card.Text>
            <Card.Text className='text-warning'>{props.product.rating.rate}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}
