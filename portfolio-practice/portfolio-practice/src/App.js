import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MentorshipForm from './components/MentorshipForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MentorshipForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
