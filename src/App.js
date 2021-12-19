import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Rooms from './pages/Rooms/Index';
import Room from './pages/Rooms/Show';


function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="primary-container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<Room />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
