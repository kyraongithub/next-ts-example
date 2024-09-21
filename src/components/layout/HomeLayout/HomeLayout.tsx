import Footer from '@/components/container/footer';
import Navbar from '@/components/container/navbar/navbar';
import React from 'react';
import { HomeLayoutProps } from './HomeLayout.interface';

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
