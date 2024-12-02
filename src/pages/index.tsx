import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from '@docusaurus/Link';
import cardsData from '@site/src/data/cards.json';

function HomepageHeader() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>AoldaCloud</h1>
        <p className={styles.heroSubtitle}>
          아주대학교 학생 어플리케이션 운영을 위한 프라이빗 클라우드
        </p>
        <div className={styles.buttons}>
          <Link to="/guide" className={styles.primaryButton}>
            가이드 이동하기
          </Link>
          <Link to="/tutorial" className={styles.secondaryButton}>
            튜토리얼 이동하기
          </Link>
        </div>
      </div>
      <img
        className={styles.heroImage}
        src="/img/character.png"
        alt="클라우드 캐릭터"
      />
    </section>
  );
}

function QuickOverview() {
  return (
    <section className={styles.quickOverview}>
      <h2>빠르게 돞아보기</h2>
      <p>클라우드를 사용하는 다양한 시나리오로 소개합니다.</p>
      <div className={styles.cardContainer}>
        {cardsData.quickOverview.map((card, index) => (
          <div className={styles.card} key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link to={card.link}>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function CloudHistory() {
  return (
    <section className={styles.cloudHistory}>
      <div className={styles.container}>
        <h2>클라우드 히스토리</h2>
        <p>
          클라우드 개발을 위해 사용한 기술과 운영하면서 해결한 고민들을 글로 정리하여 공유합니다.
        </p>
        <div className={styles.historyGrid}>
          {cardsData.cloudHistory.map((card, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imagePlaceholder}></div>
              <h3>{card.title}</h3>
              <Link to={card.link}>See More ›</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <HomepageHeader />
        <QuickOverview />
        <CloudHistory />
      </main>
    </Layout>
  );
}