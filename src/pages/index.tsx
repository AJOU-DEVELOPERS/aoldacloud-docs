import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>아주대학교 학생 클라우드</h1>
        <p className={styles.heroSubtitle}>
          아주대학교 학생 어플리케이션 운영을 위한 프라이빗 클라우드
        </p>
        <div className={styles.buttons}>
          <Link to="/guide" className={clsx(styles.button, styles.primary)}>
            가이드 이동하기
          </Link>
          <Link to="/tutorial" className={clsx(styles.button, styles.secondary)}>
            튜토리얼 이동하기
          </Link>
        </div>
      </div>
      <img
        className={styles.heroImage}
        src="/img/character.png"
        alt="클라우드 캐릭터"
      />
    </header>
  );
}

function QuickOverview() {
  return (
    <section className={styles.quickOverview}>
      <h2>빠르게 돌아보기</h2>
      <p>클라우드를 사용하는 다양한 시나리오로 소개합니다.</p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>아올다클라우드의 가상머신을 이용하는 방법</h3>
          <p>여기 내용은 컨텐츠 소개글~~.... (서비스 가이드로 이동)</p>
          <Link to="/guide">Read More</Link>
        </div>
        <div className={styles.card}>
          <h3>아올다클라우드를 이용한 웹 서비스 배포하기</h3>
          <p>여기 내용은 컨텐츠 소개글~~.... (길라잡이 문서로 이동)</p>
          <Link to="/tutorial">Read More</Link>
        </div>
      </div>
    </section>
  );
}

function CloudHistory() {
  const cards = [
    { title: "아올다클라우드 인프라 구성", link: "/infra" },
    { title: "온프레미스 환경에서 개발 및 운영 환경 구축하기", link: "/onprem" },
    { title: "쿠버네티스를 네이티브하게 파이프라인 도구 운영하기", link: "/k8s" },
    { title: "대학과 학생을 대상으로 협조 세션 운영하기", link: "/sessions" },
  ];

  return (
    <section className={styles.cloudHistory}>
      <h2>클라우드 히스토리</h2>
      <p>
        클라우드 개발을 위해 사용한 기술과 운영하면서 해결한 고민들을 글로
        정리하여 공유합니다.
      </p>
      <div className={styles.historyGrid}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <h3>{card.title}</h3>
            <Link to={card.link}>See More ›</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="홈" description="아올다클라우드 포털">
      <HomepageHeader />
      <main>
        <QuickOverview />
        <CloudHistory />
        <footer className={styles.footer}>
          <div>
            <h4>AOLDACLOUD</h4>
            <p>© 2023–2024 | Privacy — Terms</p>
          </div>
          <div>
            <h4>Product</h4>
            <p>Product</p>
            <p>Feature</p>
            <p>Feature</p>
          </div>
        </footer>
      </main>
    </Layout>
  );
}