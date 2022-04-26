import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navbar  from './Homepage/Navbar'
import { css } from 'styled-components'
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
height: 50vh;
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
background color: #23A9E1;
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


const Cart = () => {
    return(
        <Container>
            <Navbar/>
             <Wrapper>
               <Title>YOUR  BAG</Title>
               <Top>
                   <TopButton type='filled'>CONTINUE SHOPPING</TopButton>
                   <TopTexts>
                       <TopText>Shopping Bag(2)</TopText>
                       <TopText>Your Wishlist(0)</TopText>
                   </TopTexts>
               </Top>
               <Bottom>
                   <Info>
                       <Product>
                           <ProductDetail>
                               <Image src="https://i.ibb.co/gjYqQwy/71hy-JO10v1-L-SL1500.jpg"/>
                               <Details>
                                   <ProductName>
                                       <b><br></br>Product:</b> TARRISS SAMPLE GADGET
                                    </ProductName>
                                   <ProductID>
                                       <b><br></br>ID:</b>654886231
                                       </ProductID>
                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>6,000 PKR</ProductPrice>
                           </PriceDetail>
                       </Product>
                       <Hr/>
                       <Product>
                           <ProductDetail>
                               <Image src="https://i.ibb.co/ykx7gB0/Apple-TV-4-K-300x300.jpg" alt="Apple-TV-4-K-300x300"/>
                               <Details>
                                   <ProductName>
                                       <b><br></br>Product:</b> APPLE TV SAMPLE GADGET
                                    </ProductName>
                                   <ProductID>
                                       <b><br></br>ID:</b>656528741
                                       </ProductID>
                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>50,000 PKR</ProductPrice>
                           </PriceDetail>
                       </Product>
                   </Info>
                   <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>56,000 PKR</SummaryItemPrice>
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
                           <SummaryItemPrice>56,000 PKR</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CHECKOUT NOW</Button>
                   </Summary>
               </Bottom>
             </Wrapper>           
        </Container>
    )

} 

export default Cart