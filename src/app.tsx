import Home from './components/home';
import Loader from './components/loader';
import ScrollableLayout from './components/scrollable-layout';

function App() {
  return (
    <>
      <Loader />
      <main className="invisible bg-primary">
        <ScrollableLayout>
          <Home />
        </ScrollableLayout>
      </main>
    </>
  );
}

export default App;
