import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import { CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap'
import './ProductCard.css'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}) {
  const navigate=useNavigate();

  const addtocartandbuy = (event,prod) => {
    let cartPrevious=JSON.parse(localStorage.getItem("cart"));
    console.log("xcc",cartPrevious?cartPrevious.item?cartPrevious.item.length>0:false:false,cartPrevious);
    let order;

    if(cartPrevious?cartPrevious.item:false){
      order=cartPrevious;
      order.item.push(prod);
    }else{
      order={item:[prod]}
    }
    localStorage.setItem("cart",JSON.stringify(order))
    navigate("../cart")

    console.log("ccc",prod);


};

const addtocart = (event,prod) => {
  let cartPrevious=JSON.parse(localStorage.getItem("cart"));
  console.log("xcc",cartPrevious?cartPrevious.item?cartPrevious.item.length>0:false:false,cartPrevious);
  let order;

  if(cartPrevious?cartPrevious.item:false){
    order=cartPrevious;
    order.item.push(prod);
  }else{
    order={item:[prod]}
  }
  localStorage.setItem("cart",JSON.stringify(order))
   window.alert("Product added to Cart");

  console.log("ccc",prod);


};

  return (


      <Row xs={1} md={4}  className="g-4" style={{width:'1800px',paddingLeft:"100px",marginBottom:'50px',marginTop:'50px'}}>
        {product.map((p, i) => (
        <Col key={i}>
          <Card >
            <Card.Img variant="top" src={p.image||''} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>
              {p.category}
              <br/>
              <p>PKR {p.price}
           </p>
              </Card.Text>
            </Card.Body>
            
                    <Button onClick={event => addtocartandbuy(event, p)} className='button'>BUY</Button>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                <Link to={`/SingleProductView/${p._id}`} component={RouterLink} variant="body2">
                    <Button className='button'>
                      VIEW
                      </Button>
                  </Link>

            

          </Card>
          
        </Col>
      ))}
    </Row>
    )

}