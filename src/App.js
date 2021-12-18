import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import { Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
// import './App.css';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="primary-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
