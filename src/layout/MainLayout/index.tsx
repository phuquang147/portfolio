import { Outlet } from 'react-router-dom';
import ScrollToTop from '~/layout/MainLayout/ScrollToTop';
import Footer from './Footer';
import Header from './Header';
import SectionContact from './SectionContact';
import { Toaster } from 'react-hot-toast';

export default function index() {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <SectionContact />
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false} />
    </ScrollToTop>
  );
}
