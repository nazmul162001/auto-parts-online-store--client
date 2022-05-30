import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import 'tw-elements';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/PurchaseProduct/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  
});

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />}></Route>
            <Route path="review" element={<AddReview />}></Route>
            <Route path="payment/:id" element={<Payment />}></Route>
            <Route path="orders" element={<MyOrders />}></Route>
            <Route path="manageOrders" element={<ManageOrders />}></Route>
            <Route path="addProduct" element={<AddProduct />}></Route>
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            ></Route>
            <Route path="manageProduct" element={<ManageProduct />}></Route>
          </Route>

          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
