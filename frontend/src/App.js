import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StrainList from './components/StrainList';
import StrainDetail from './components/StrainDetail';
import StrainForm from './components/StrainForm';

function App() {
  return (
    <Router>
      <div>
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


