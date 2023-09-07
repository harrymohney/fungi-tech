import { BrowserRouter as Router, Route } from 'react-router-dom';
import StrainList from './components/StrainList';
import StrainDetail from './components/StrainDetail';
import StrainForm from './components/StrainForm';

function App() {
  return (
    <Router>
      <div>
        <>
          <Route path="/strains/add" component={StrainForm} />
          <Route path="/strains/:id" component={StrainDetail} />
          <Route path="/strains" component={StrainList} />
          <Route path="/" component={StrainList} />
        </>
      </div>
    </Router>
  );
}

export default App;

