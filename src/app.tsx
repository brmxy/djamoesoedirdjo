import gsap from 'gsap';
import Header from './components/header';
import Home from './components/home';
import Loader from './components/loader';
import ScrollableLayout from './components/scrollable-layout';

const tl = gsap.timeline();

function App() {
  return (
    <>
      <Loader tl={tl} />
      <main className="relative flex min-h-screen flex-col bg-primary opacity-0">
        <Header />
        <ScrollableLayout>
          <Home tl={tl} />
        </ScrollableLayout>
      </main>
    </>
  );
}

export default App;
