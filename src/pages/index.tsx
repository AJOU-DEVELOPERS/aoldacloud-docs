import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from '@docusaurus/Link';

function HomepageHeader() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>아주대학교 학생 클라우드</h1>
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
        <div className={styles.card}>
          <h3>아올다클라우드의 가상머신을 이용하는 방법</h3>
          <p>여기 내용은 컨텐츠 소개글입니다... (서비스 가이드로 이동)</p>
          <Link to="/guide">Read More</Link>
        </div>
        <div className={styles.card}>
          <h3>아올다클라우드를 이용한 웹 서비스 배포하기</h3>
          <p>여기 내용은 컨텐츠 소개글입니당.... (길라잡이 문서로 이동)</p>
          <Link to="/tutorial">Read More</Link>
        </div>
        <div className={styles.card}>
          <h3>클라우드 데이터베이스 사용해보기</h3>
          <p>여기 내용은 데이터베이스 사용 가이드에요.... (데이터베이스 문서로 이동)</p>
          <Link to="/database">Read More</Link>
        </div>
        <div className={styles.card}>
          <h3>API 서버 배포하기</h3>
          <p>여기 내용은 API 서버 배포 과정입니다.... (배포 가이드로 이동)</p>
          <Link to="/api">Read More</Link>
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
    { title: "클라우드 스토리지 솔루션 활용하기", link: "/storage" },
    { title: "클라우드 보안 강화하기", link: "/security" },
    { title: "DevOps와 클라우드 운영 사례", link: "/devops" },
    { title: "고가용성 클라우드 서비스 운영하기", link: "/highavailability" },
  ];

  return (
    <section className={styles.cloudHistory}>
      <div className={styles.container}>
        <h2>클라우드 히스토리</h2>
        <p>
          클라우드 개발을 위해 사용한 기술과 운영하면서 해결한 고민들을 글로 정리하여 공유합니다.
        </p>
        <div className={styles.historyGrid}>
          {cards.map((card, index) => (
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