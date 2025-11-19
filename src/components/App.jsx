import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';  // Nom plus explicite
import Layout from './Layout/Layout.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {  
  return (
    <BrowserRouter>
      <Layout>
      <AppRouter />
      </Layout>
    </BrowserRouter>
  )
}

export default App;