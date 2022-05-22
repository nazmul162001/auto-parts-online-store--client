import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import NavbarMini from './Pages/Shared/NavbarMini';
import Footer from './Pages/Shared/Footer';
import 'tw-elements';

function App() {
  return (
    <div>
      <Navbar>
        <NavbarMini />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
