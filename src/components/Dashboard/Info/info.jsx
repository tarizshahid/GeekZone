import './info.css';
import dc from './doctor2.png';

export default function Info() {
  return (
  <>
  <div className='info'>
      <div className='dpdiv'>
      <img src={dc} className='dp'></img>
      </div>
      <div className='infotext'>
          <h4 className='na'>Abdul Rahman</h4>
           <div className='info1'>
          <div className='age'>
              
             <h4 className='inti'>23</h4>
             <span className='ti'>Age</span>

          </div>
          <div className='group'>
              
              <h4 className='inti'>A+</h4>
              <span className='ti'>Blood Group</span>
 
           </div>
          </div>
          <div className='info2'>
          <div className='height'>
              
             <h4 className='inti'>183cm</h4>
             <span className='ti'>Height</span>

          </div>
          <div className='weight'>
              
              <h4>91kg</h4>
              <span className='ti' >Weight</span>
 
           </div>
          </div>
      </div>
  </div>
  
  </>);
}
