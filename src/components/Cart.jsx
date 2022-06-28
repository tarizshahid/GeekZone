import { Add, Remove } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Navbar  from './Homepage/Navbar'
import { css } from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import { TextField } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {

      htmlfontSize: 16,
    },
  });

const fontsized = styled.div`
    font-size: 22px;
`

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300px;
text-align: center;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
font-size: 20px;
text-align: center;
padding: 35px;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton= styled.button`
padding: 10px;
font-weight: 600px;
font-size: 16px;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "#23A9E1" : "transparent"};
color: ${props=>props.type === "filled" && "white"}
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;


const Info = styled.div`
flex: 3;
`;


const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 64vh;
font-size: 14px;
`;

const Product = styled.div`
Display: flex;
justify-content: space-between;
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;


const Image = styled.img`
width: 200px;
`;


const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: around;
`;


const ProductName = styled.span`
font-size: 16px;
`;


const ProductID = styled.span`
font-size: 16px;
`;


const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.div`
font-size: 24px;
font-weight: 300;
`;

const Hr = styled.hr`
background-color: #23A9E1;
border: none;
height: 1px;
`;

const SummaryTitle = styled.h1`
font-weight: 400;
`;


const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;


const SummaryItemText = styled.span``;


const SummaryItemPrice = styled.span``;


const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #23A9E1;
color: white;
font-weight: 600;
font-size: 14px;
border: none;
`;


var order=[]

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [total, settotal] = useState(0)
    const navigate=useNavigate();
    var user;


    useEffect(async ()=> {
        try {
    
            if(JSON.parse(localStorage.getItem("user"))){
                user=JSON.parse(localStorage.getItem("user"));

            }
      
             let cartPrevious=JSON.parse(localStorage.getItem("cart"));
                if(cartPrevious.item?cartPrevious.item.length>0:false){
                    let tot=0;

                 for(let i=0;i<cartPrevious.item.length;i++){
                    let obj={
                        product_name:'',
                        product_id:'',
                        product_price:2,
                        quantity:1,
                        person_id:undefined,
                        person_name:'',
                        date:'',
                        address:'',
                        status:'',
                        method:''
                    }

                    obj.product_name=cartPrevious.item[i].name||'';
                    obj.product_id=cartPrevious.item[i]._id||'';
                    obj.product_price=cartPrevious.item[i].price||0;

                    obj.quantity=1;
                    obj.person_id=user?user._id:undefined;
                    obj.person_name=user?(user.Fname+' '+user.Lname):'';
                    obj.date=(new Date()).toDateString();

                    obj.address=user?user.address:'';
                    obj.status='Paid';
                    obj.method='COD';
                    tot=tot+(cartPrevious.item[i].price||0);
                    settotal(tot);
                    order.push(obj);    
                    console.log("counting add")
                 }
                }
             
             setProducts(cartPrevious.item);

        console.log("cartt",user, order);

        


        } catch (error) {
            console.error(error);
        }
      },[])

      const deleteitem =(e,item) =>{
           

        order=order.filter((e)=> {return !(e.product_id.toString()==item._id.toString())});
        let cartPrevious=JSON.parse(localStorage.getItem("cart"));

        cartPrevious.item=cartPrevious.item.filter((e)=> {return !(e._id.toString()==item._id.toString())});
        setProducts(cartPrevious.item);

          let neworder={item:cartPrevious.item}
          localStorage.removeItem("cart");
        localStorage.setItem("cart",JSON.stringify(neworder))
         window.alert("Product removed from Cart");
      

        };

        const submits = (event) => {
    console.log("sdfdf");
     
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("qwqwe");


        console.log("cartt",user, order);

        
        for(let i=0;i<order.length;i++){

        console.log("iddd, i= ", i);

        order[i].person_name=data.get('person_name');
        order[i].phone=data.get('person_phone');
         order[i].address=data.get('address');

        axios.post(`http://localhost:4000/api/cart/setData`,{data:order[i]}).then(res => {
            window.alert('order placed')
            navigate("../")
            console.log("allProduct addeddess");
        } );

        }


  };


        const checkouted =() =>{
            /* order.shift(); */
            /* localStorage.setItem('order', JSON.stringify(order));
            navigate("../checkout"); */
            /* console.log("finished", order);
*/
            for(let i=0;i<order.length;i++){

                console.log("iddd, i= ", i);
                axios.post(`http://localhost:4000/api/cart/setData`,{data:order[i]}).then(res => {
                 
                    console.log("allProduct addeddess");
                } );

            }
            
            
            window.alert("Order has been Placed.");
            navigate("../") 


        };
    
    return(
        <Container>
            <Navbar/>
             <Wrapper>
               <Title>YOUR  BAG</Title>
               <Top>
               <Link to="/" component={RouterLink} variant="body2">
                 <TopButton type='filled'>CONTINUE SHOPPING</TopButton>
                   
                  </Link>

               </Top>
               <Bottom>
                   <Info>
                   {products.map((p, i) => (
                       <Product key={p._id}>
                           <ProductDetail>
                               <Image src={p.image}/>
                               <Details>
                                   <ProductName>
                                       <b><br></br>Product:</b> {p.name}
                                    </ProductName>
                                   <ProductID>
                                       <b><br></br>ID:</b>{p._id}
                                       </ProductID>
                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                            <ProductAmountContainer>
                                <ProductAmount>{p.category}</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>{p.price}</ProductPrice>
                           <Button onClick={event => deleteitem(event, p)} >remove</Button>

                           </PriceDetail>

                       </Product>
                   ))}
                       <Hr/>


                   </Info>
                   
                   
                   <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>{total} PKR</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Estimated Shipping</SummaryItemText>
                           <SummaryItemPrice>180 PKR</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Shipping Discount</SummaryItemText>
                           <SummaryItemPrice>-180 PKR</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem type="total">
                           <SummaryItemText>Total</SummaryItemText>
                           <SummaryItemPrice>{total} PKR</SummaryItemPrice>
                       </SummaryItem>
                       <form onSubmit={submits}>
                       <ThemeProvider theme={theme}>
               <TextField id="filled-basic" name="person_name" placeholder="Name" variant="filled" InputProps={{ style: { fontSize: 18 } }}InputLabelProps={{ style: { fontSize: 18 } }}/><br></br><br></br>
               <TextField id="filled-basic" name="person_phone" placeholder="Phone No." variant="filled" InputProps={{ style: { fontSize: 18 } }} InputLabelProps={{ style: { fontSize: 18 } }}/><br></br><br></br>
               <TextField id="filled-basic" name="address" placeholder="Shipping Address" variant="filled" InputProps={{ style: { fontSize: 18 } }} InputLabelProps={{ style: { fontSize: 18 } }}/><br></br><br></br>
               </ThemeProvider>
               <Button  type="submit" >CHECKOUT NOW</Button>
               </form>
                       </Summary>
               </Bottom>
             </Wrapper>           
        </Container>
    )

} 

export default Cart