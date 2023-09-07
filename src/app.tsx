import gsap from 'gsap';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
// import Loader from './components/loader';
import ScrollableLayout from './components/scrollable-layout';

const tl = gsap.timeline();

function App() {
  return (
    <>
      {/* <Loader timeline={tl} /> */}
      <main className="min-h-screen">
        <Header timeline={tl} />
        <ScrollableLayout>
          <Home timeline={tl} />
          <Footer timeline={tl} />
        </ScrollableLayout>
      </main>
    </>
  );
}

export default App;
