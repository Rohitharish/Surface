'use client';

import Home from './pages/home/page';
import About from './pages/ViewIn3d/page';
import { ReactLenis } from 'lenis/react';
import Preloader from './Components/Preloader/page';
import Services from './pages/Services/page';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import SpecialTextanimation from './Components/SpecialText/SpecialTextanimation';
import Beoplay from './Components/Servicescomponent/Beoplay';
import Hover from './Components/Servicescomponent/Hover';

export default function Main() {
  return (
    <ReactLenis root>
      {/* <Menu /> */}
      <Preloader />
      <Home />
      <Services />
      <Beoplay />
      <Hover />
      <Feedback />
      <Footer />
    </ReactLenis>
  );
}
