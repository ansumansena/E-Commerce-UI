import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const App = () => {
    const user = true;
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<ProductList />} />
                <Route exact path="/product" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                <Route exact path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            </Routes>
        </Router>
    );
};
export default App;
