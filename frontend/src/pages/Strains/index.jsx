import { useState, useEffect } from 'react';

import Spinner from '../../components/Spinner';
import StrainList from './StrainList';
import NewStrainForm from './NewStrainForm';
import { getStrains } from '../../utilities/strains-service';

export default function Strains(props) {
  const [strains, setStrains] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handleRequest() {
    const strainsResponse = await getStrains();

    if (strainsResponse.length) {
      setStrains(strainsResponse);
      setIsLoading(false);
    } else {
      console.error(strainsResponse);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <NewStrainForm updateStrains={handleRequest} />
      <StrainList strains={strains} />
    </>
  );
}
