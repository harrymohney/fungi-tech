import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StrainList from './components/StrainList';
import StrainDetail from './components/StrainDetail';
import StrainForm from './components/StrainForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="body-background">
        <Routes>
          <Route path="/strains/add" element={<StrainForm />} />
          <Route path="/strains/:id" element={<StrainDetail />} />
          <Route path="/strains" element={<StrainList />} />
          <Route path="/" element={<StrainList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


