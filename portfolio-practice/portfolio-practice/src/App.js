import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MentorshipForm from './components/MentorshipForm';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/create-profile' element={<MentorshipForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
