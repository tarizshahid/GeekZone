import React, { useState } from 'react';
import Sidebar from "./sidebar/sidebar";
import joker from './joker.jpg'
import { NotificationsNone,Settings,Language } from '@material-ui/icons';
import './Dashboard.css';
import Analytics from './components/pages/Analytics/Analytics.jsx';
import Home from './components/pages/home/home.jsx';
import {BrowserRouter as Router, Link, Route ,Routes} from 'react-router-dom';

const Dashboard =()=> {
  const [state, setstate] = useState(false)
 const handleclick=()=>
 {
     state?setstate(false):setstate(true)
 }

    return(
        <>
     
 <div className='topbar'>
               <div className= 'topbarfull'>
                   <div className='left'>
                   <div className='menuuu-icon' onClick={handleclick}>
               <i className={state? 'fas fa-times s':'fas fa-bars s' }></i>
            
            </div>
                   <h1 className='topbar-logo'>Digi Hastany<i className="fas fa-heartbeat"></i></h1>
                   </div>
                   <div className='right'>
                       <div className='topbaricons'>
                      <NotificationsNone />
                      <span className="topiconbadge">2</span>
                      </div>
                      <div className='topbaricons'>
                      <Language />
                      <span className="topiconbadge">2</span>
                      </div>
                      <div className='topbaricons'>
                      <Settings />
                      </div>
                      <img src={joker} className='topimage'></img>
                   </div>

               </div>
           </div>
<div className='container'>
<Router>
  <div className={state? 'active e':'menu e ' }>
    
<Sidebar />
  
</div>
     <div className='main'>
     <Routes>
     <Route path={'/Home'} exact element={<Home />}></Route>
<Route path={'/analytics'} element={<Analytics/>}></Route>
<Route path={'/order'} exact element={<Home />}></Route>
<Route path={'/Users'} element={<Analytics/>}></Route>

       </Routes>
     </div>
     </Router>
</div>

  </>
    );
}

export default Dashboard;