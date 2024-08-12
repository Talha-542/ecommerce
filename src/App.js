
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Login from './components/Login/Login';

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <div className="app-container">
//       {isAuthenticated ? (
//         <h1>Welcome!</h1>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }

// export default App;




import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/products' element={ <Products /> }></Route>
        <Route path='/cart' element={ <Cart /> }></Route>
        <Route path='/login' element={ <Login /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}
