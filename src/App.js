import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='bg-black text-white w-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
