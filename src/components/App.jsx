import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';  // Nom plus explicite
import Layout from './Layout/Layout.jsx';


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