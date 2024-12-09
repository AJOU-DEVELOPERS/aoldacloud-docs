import React from 'react';
import styles from "@site/src/components/HomepageFeatures/HomepageFeatures/CustomFooter.module.css";
import footerData from '@site/src/data/footer.json';

export default function FooterWrapper(): JSX.Element {
  const { company, sections } = footerData;
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>{company.name}</h3>
        <p>{company.copyright}</p>
        <p>{company.legal}</p>
        <p>{company.contact}</p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerGrid}>
          {sections.map((section) => (
            <div key={section.title} className={styles.footerSection}>
              <div className={styles.footerItem}>{section.title}</div>
              {section.items.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={styles.footerLink}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}