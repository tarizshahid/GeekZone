import './Analytics.css';
import Linechart from '../home/linechart/linechart.jsx';
import Percentagecircle from '../home/percentagecircle/percentage'
import Something from '../home/something/something.jsx';

export default function Analytics() {
  return (
  <>
  <div>  
  <div className='bothhaftt'>
  <div className='firstlinet'>
  <Percentagecircle/>
  <Something/>
 
  
  </div>
  <div className='secondlinet'>
  <Linechart/>
  </div>
  </div>
  



   


   </div>
      </>);
}
