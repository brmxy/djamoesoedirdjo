import gsap from 'gsap';
import Header from './components/header';
import Home from './components/home';
import Loader from './components/loader';
import ScrollableLayout from './components/scrollable-layout';

const tl = gsap.timeline();

function App() {
  return (
    <>
      <Loader timeline={tl} />
      <main className="relative flex min-h-screen flex-col">
        <Header timeline={tl} />
        <ScrollableLayout>
          <Home timeline={tl} />
        </ScrollableLayout>
      </main>
    </>
  );
}

export default App;
