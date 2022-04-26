import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


// import {useEffect, useState} from 'react'
// import * as Realm from "realm-web"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

,document.getElementById('root'));
reportWebVitals();

// export default function Home() {
//     const [products, setProducts] = useState([])

//     useEffect(async ()=> {
//         const REALM_APP_ID = "products-kzbxu";
//         const app = new Realm.App({id: REALM_APP_ID})
//         const credentials = Realm.Credentials.anonymous();
//         try {
//             const user = await app.logIn(credentials);
//             const allProducts = await user.functions.getAllProducts();
//             setProducts(allProducts);
//             console.log(allProducts)
//         } catch (error) {
//             console.error(error);
//         }
//     },[])

//     return (
//         <div>
//             <main>
//                 {products!==null && products.map(product =>( 
//                 <div key={product.id}>
//                     <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true'
//                     width='100%' height='auto' />
//                     <p>{product.category}</p>
//                     <p>{product.name}</p>
//                     <p>{product.price}</p>
//                 </div>
//                 ))}
//             </main>
//         </div>
//     )
// }