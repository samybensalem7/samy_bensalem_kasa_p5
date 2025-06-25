import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';  // Nom plus explicite
import Header from './Header/Header.jsx';

function App() {  
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;