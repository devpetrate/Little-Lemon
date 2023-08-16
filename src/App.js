import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './RATComponents/BookingPage';


function App() {


  return (
    <>

      <Routes>
        <Route
          path="/"
          element={<>
            <section className="navbar">
              <Header />
              <Nav /></section>
            <Main />
            <Footer />
          </>
          }></Route>
      </Routes>

      <Routes>
        <Route path="/bookingpage" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
