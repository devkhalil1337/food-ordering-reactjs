import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.jsx";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from "./components/layout";
function App() {
  return (
    <Router>
      <Header />

      <Layout/>
  </Router>
  );
}

export default App;
