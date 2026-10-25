import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import MinimalHeader from './components/MinimalHeader.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
import JsonLd from './components/JsonLd.jsx';
import Home from './pages/Home.jsx';
import GetEstimate from './pages/GetEstimate.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isEstimate = pathname.startsWith('/get-estimate');

  useEffect(() => {
    document.body.classList.toggle('has-callbar', !isEstimate);
  }, [isEstimate]);

  return (
    <>
      <ScrollManager />
      <JsonLd />
      {isEstimate ? <MinimalHeader /> : <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-estimate" element={<GetEstimate />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {!isEstimate && <Footer />}
      {!isEstimate && <MobileCallBar />}
    </>
  );
}
