import React from 'react';
import Link from '@docusaurus/Link';
import styles from "@site/src/components/HomepageFeatures/HomepageFeatures/CustomHeader.module.css";

export default function NavbarWrapper(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        AOLDACLOUD
      </Link>
      <nav className={styles.navItems}>
        <Link to="/guide">서비스 가이드</Link>
        <Link to="/tutorial">길라잡이</Link>
        <Link to="/database">데이터베이스</Link>
        <Link to="/api">API 서버</Link>
      </nav>
      <Link to="/console" className={styles.consoleButton}>
        콘솔 이동하기
      </Link>
    </header>
  );
}