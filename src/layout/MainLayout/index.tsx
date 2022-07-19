import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '~/layout/MainLayout/ScrollToTop';
import Footer from './Footer';
import Header from './Header';
import SectionContact from './SectionContact';

export default function index() {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <SectionContact />
      <Footer />
    </ScrollToTop>
  );
}
