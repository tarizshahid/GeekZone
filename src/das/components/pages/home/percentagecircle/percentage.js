import './percentagecircle.css'

export default function Percentagecircle() {
  return (
    <>

    <div className='skill'>
    <h3 className='Analytics'>Analytics</h3>
      <div className='firstper'>
               <div className='outter'>
                    <div className='inner'>
                         <div className='number'>
                              65%
                         </div>
                     </div>
                 </div>
    <div className='svg'>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
       <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
       </linearGradient>
    </defs>
    <circle className='circle' cx="75" cy="80" r="50" stroke-linecap="round" />
</svg>
<h3 className='nas'>Balance</h3>
</div>
</div>
<div className='secondper'>
<div className='outter'>
                    <div className='inner'>
                         <div className='number'>
                              65%
                         </div>
                     </div>
                 </div>
    <div className='svg'>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
    <defs>
       <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
       </linearGradient>
    </defs>
    <circle className='circle' cx="75" cy="80" r="50" stroke-linecap="round" />
</svg>
<h3 className='nas'>Balance</h3>
</div>
</div>


</div>
    </>
  );
}

