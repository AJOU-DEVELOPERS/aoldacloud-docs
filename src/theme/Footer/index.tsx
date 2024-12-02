import React from 'react';
import styles from "@site/src/components/HomepageFeatures/HomepageFeatures/CustomFooter.module.css";

export default function FooterWrapper(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>AOLDACLOUD</h3>
        <p>© 2023 – 2024</p>
        <p>Privacy - Terms</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerGrid}>
          <div className={styles.footerItem}>Product</div>
          <div className={styles.footerItem}>Feature</div>
        </div>
      </div>
    </footer>
  );
}