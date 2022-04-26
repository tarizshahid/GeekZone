import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'
import './FAQs.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `10px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
    
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(01, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    fontSize:"50px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (  
    <>
<div className='bad'>
        <br/><br/>
        <br/><br/>


       <p className='text-heading'> Frequently Asked Questions</p>
    <br/><br/> 
    <p className='text-center'> GeekZone believes in utter satisfaction of the customers. However, in case of relevant confusion, our customers never hesitate to ask for our guidance. Hence, there are some frequently asked questions that we tried from the best of all levels to answer for the satisfaction of our valuable customers.</p>
    <br/><br/>

<div className='ml'>
 <Grid item xs={6}  paddingRight={1} > 
      <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19') } >
        <AccordionSummary aria-controls="panel19d-content" id="panel19d-header" >
          <Typography variant='h5' >What kind of shipping methods are used at GeekZone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          GeekZone simply deliver the packages through shipments by TCS and Leopard courier service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant='h5'>Does GeekZone offer free Delivery?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          The standard delivery charges apply according to the courier services. However, GeekZone offers free shipping on the orders above or up to Rs.2500.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant='h5'>Do GeekZone ships internationally?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          No, right now we don’t ship our products internationally. GeekZone ships in Pakistan only. However, we have a plan to drag our gadgets market beyond the borders in the coming years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography variant='h5'>How much time duration is required to get the parcel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          Waiting hurts most. That’s why GeekZone doesn’t like the beloved customers to keep on waiting for the parcel. You can receive your parcel within three days. Once you add to cart your item then after several procedures of authentication, GeekZone dispatches you the most accurate one as you desired for.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
          <Typography variant='h5'>What are the payment options at GeekZone?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          GeekZone is an online shopping mart. Therefore, you have to purchase everything online. However, as our basic priority is customer’s satisfaction that’s why to avoid any sort of mishap we don’t offer online payment or any sort of money transaction. Therefore, shipping method is cash on delivery. Once you receive your order safely then you can pay directly to the correspondent.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant='h5'>Do the prices remain same or are there any special offers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          GeekZone believes in customer’s satisfaction at an ultimate ease. That’s why we keep bringing on special deals as well as discount up to 50% in some of the most demanding items.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography variant='h5'>What should I do if I receive a damaged or wrong product?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
            Gadgets Online Offer hastle free relacement policy, do check our policy page.
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography variant='h5'>What about change of mind or do you have any return/replacement policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='h5'>
          Yes, we do have, kindly see the Exchange/Replacement Policy.


          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </Grid>
    </div>
    <div className='terms' >
    <p className='text-headingg'> <br/> 
     Terms and Conditions : </p>
    

    
     <li >
       >  Before Payment Customers not allowed to open the Parcels. <br/>
        >  In case of any complain regarding parcel. please contact to the shipper. <br/>
       >  Please do not accept the parcel if damaged or unsealed. <br/>   
      </li>
    
     
      </div>
      </div>
      

    </>
  );
}
