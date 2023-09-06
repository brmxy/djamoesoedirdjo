import { useState } from 'react';
import Home from './components/home';
import Loader from './components/loader';
import ScrollableLayout from './components/scrollable-layout';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader
          onLoadingComplete={() => {
            setLoading(false);
          }}
        />
      ) : (
        <ScrollableLayout>
          <Home />
        </ScrollableLayout>
      )}
    </>
  );
}

export default App;
