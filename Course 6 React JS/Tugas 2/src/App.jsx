import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Contacts from "./Pages/contacts";
import Teams from "./Pages/teams";
import MainLayout from "./layouts/MainLayout";
import './App.css';

function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<Books />} />
              <Route path="contact" element={<Contacts />} />
              <Route path="team" element={<Teams />} />
            </Route>

            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App


