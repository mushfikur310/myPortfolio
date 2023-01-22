import React from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, version } from "antd";
import PortfolioHeader from './components/header';
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import 'antd/dist/reset.css';

const divStyle = {
  backgroundColor: '#74b9ff',
  color: '#ced6e0'
};

const appBackground = {
  backgroundColor: '#f4f5f7'
}

function App() {
  return (
    <div>
      <div style={divStyle}>
        <PortfolioHeader />
      </div>
      <div style={appBackground}>
        <AboutMe />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
