import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
import Layout from './Layout/Layout.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {  
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> {/* pour enlever les warnings dans la console */}
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  )
}

export default App;