import Link from 'next/link';
import React from 'react';
import Searchbar from '../searchbar';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>

      <Searchbar />
    </div>
  );
};

export default Navbar;
