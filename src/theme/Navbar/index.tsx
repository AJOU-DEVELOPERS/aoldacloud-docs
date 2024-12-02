import React from 'react';
import Link from '@docusaurus/Link';
import styles from "@site/src/components/HomepageFeatures/HomepageFeatures/CustomHeader.module.css";

export default function NavbarWrapper(): JSX.Element {
  return (
    <header className={`navbar ${styles.header}`}>
      <Link to="/" className={styles.logo}>
        AOLDACLOUD
      </Link>
      <nav className={styles.navItems}>
        <Link to="/intro">소개</Link>
        <Link to="/guide">가이드</Link>
        <Link to="/tutorial">길라잡이</Link>
        <Link to="/blog">히스토리</Link>
      </nav>
      <Link to="https://console.aoldacloud.com" className={styles.consoleButton}>
        콘솔 이동하기
      </Link>
    </header>
  );
}
