import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GameDetailPage from "./pages/GameDetailPage";
import BrowserPage from "./pages/BrowserPage";
import LibraryPage from "./pages/LibraryPage";
import OrderPage from "./pages/OrderPage";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/game/:id" component={GameDetailPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/browser" component={BrowserPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/admin" component={AdminPage} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
