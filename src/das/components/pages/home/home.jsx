import Info from './Info/info.jsx';
import Linechart from './linechart/linechart.jsx';
import Percentagecircle from './percentagecircle/percentage'
import Something from './something/something.jsx';
import './home.css'
export default function Home() {
  return (<>
  <div className='bothhaft'>
  <div className='firsthaft'>
  <div className='firstline'>
  <Info />
  <Percentagecircle/>
  <Something/>
 
  
  </div>
  <div className='secondline'>
  {/* <Linechart/> */}
  </div>
  </div>
  <div className='secondhaft'>
    </div>
    



    
    </div>





    
    

 


    
  </>);
}
