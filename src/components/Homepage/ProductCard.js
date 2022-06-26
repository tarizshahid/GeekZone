import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import {Row,Col} from 'react-bootstrap'
import { CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap'
import './ProductCard.css'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';

export default function ProductCard({product}) {
  
  return (


      <Row xs={1} md={4}  className="g-4" style={{width:'1800px',paddingLeft:"100px",marginBottom:'50px',marginTop:'50px'}}>
        {product.map((p, i) => (
        <Col key={i}>
          <Card >
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>
              {p.category}
              <br/>
              <p>PKR {p.price}
           </p>
              </Card.Text>
            </Card.Body>
            <Link to="/SingleProductView" component={RouterLink} variant="body2">
                    <Button className='button'>BUY</Button>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Button className='button'>Add To Cart</Button>
                  </Link>
            

          </Card>
          
        </Col>
      ))}
    </Row>
    )

}