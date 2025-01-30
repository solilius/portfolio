import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Contact from "./Pages/Contact";


const MyRouter = styled(Router)`
  margin: 0 auto;
`;

const RouterContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #ddd;
  border-radius: 8px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  a:hover {
    color: blue;
  }
`;

const App: React.FC = () => {
  return (
    <MyRouter>
      <Navbar>
        <Link to="/">Games</Link>
        <Link to="/contact">Contact</Link>
      </Navbar>

      <RouterContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RouterContainer>
    </MyRouter>
  );
};

export default App;
