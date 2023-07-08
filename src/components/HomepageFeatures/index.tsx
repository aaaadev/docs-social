import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '광고 없음',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Eri-nyannyan 인스턴스는 Twitter 등의 소셜미디어와 달리 광고를 부착하지 않아요.
        짜증나는 광고로부터 자유로워지세요.
      </>
    ),
  },
  {
    title: '한 노트당 최대 3000자 작성 가능',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Twitter의 글자 수 제한에 짜증났던 적이 있으셨나요?
        Eri-nyannyan 인스턴스는 Calckey와 ActivityPub 프로토콜을 사용하여 널널한 글자 수 제한으로 친구들과 서로 소통할 수 있어요.
      </>
    ),
  },
  {
    title: '연합 우주',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Eri-nyannyan 인스턴스 외에도 ActivityPub에 기반한 다른 소셜 미디어 인스턴스와 교류할 수 있어요.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
