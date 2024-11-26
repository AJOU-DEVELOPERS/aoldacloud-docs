import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <img 
        src="/img/ajou-campus.jpg" 
        alt="아주대학교 캠퍼스" 
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {siteConfig.title}
        </h1>
        <p className={styles.heroSubtitle}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(styles.button, styles.buttonPrimary)}
            to="/docs/services">
            서비스 시작하기
          </Link>
          <Link
            className={clsx(styles.button, styles.buttonSecondary)}
            to="/docs/tutorial">
            튜토리얼 가이드
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <i className={clsx('fas', icon, styles.featureIcon)} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const features = [
    {
      title: '손쉬운 시작',
      description: '단 몇 분만에 서비스를 시작하고 실행해볼 수 있습니다.',
      icon: 'fa-rocket'
    },
    {
      title: '강력한 기능',
      description: '다양한 API와 도구를 활용해 원하는 기능을 구현하세요.',
      icon: 'fa-tools'
    },
    {
      title: '실시간 지원',
      description: '문제가 생겼을 때 신속한 기술 지원을 받을 수 있습니다.',
      icon: 'fa-headset'
    }
  ];

  return (
    <Layout
      title="홈"
      description="아올다클라우드 포털">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {features.map((props, idx) => (
              <FeatureCard key={idx} {...props} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
