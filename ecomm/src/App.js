
import './App.css';
import Navbar from './Components/Navbar/NavBar';
// import { About } from './Pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Pages/Home';
import ShopContextProvider from './Contexts/ShopContext';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png';
import women_banner from './Components/Assests/banner_women.png';
import kid_banner from './Components/Assests/banner_kids.png';


// import Contact from './Pages/Contact';
// import { Route,Routes } from 'react-router-dom';

// function App() {
//   return (
//     <>
//         <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             </Routes>          
//     </>
//   );
// }

function App() {
  return (
    <Router>
       <ShopContextProvider>
      <Navbar />
      {/* <div className="container my-3"> */}
      <Switch>
        <Route  path="/" component={Shop} /> 
         <Route path="/mens" component={<ShopCategory  category="men"/>} banner={men_banner}  />
        <Route path="/womens" component={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kids" component={<ShopCategory banner={kid_banner} category="kid"/>} />
        <Route path="/product" component={<Product/>} />
        <Route path=":productId" component={<Product/>} />
        <Route exact path="/cart" component={<Cart/>} />
        <Route exact path="/login" component={<LoginSignup/>} /> 
      </Switch>
<Footer/>
</ShopContextProvider>
      {/* </div> */}
    </Router>
  );
}
export default App;
