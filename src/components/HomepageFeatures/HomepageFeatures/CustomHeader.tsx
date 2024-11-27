import React from "react";
import Link from '@docusaurus/Link';
import styles from "../../../pages/index.module.css";

export default function CustomHeader() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        AOLDACLOUD
      </Link>
      <nav className={styles.navItems}>
        <a href="#intro">소개</a>
        <a href="#services">서비스</a>
        <a href="#guide">길라잡이</a>
        <a href="#blog">블로그</a>
      </nav>
      <a href="/console" className={styles.consoleButton}>
        콘솔 이동하기
      </a>
    </header>
  );
}