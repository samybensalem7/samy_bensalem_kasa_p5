import { Routes, Route } from 'react-router-dom';
import About from '@/pages/About/About.jsx';
import Home from '@/pages/Home/Home.jsx';
import Error from '@/components/Error/Error.jsx';

export default function AppRouter() {
  return (
    <Routes>  
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}