import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '易于使用',
    Svg: require('../../static/img/undraw_Website_setup_re_d4y9.svg').default,
    description: (
      <>
        <code>TailChat</code> 的基本设计借鉴了 <code>discord</code>, 但是与 <code>discord</code> 不同的是, <code>TailChat</code> 使用面板这一概念而不是频道。这让群组的能力不仅仅只局限于聊天。
      </>
    ),
  },
  {
    title: '始于插件',
    Svg: require('../../static/img/undraw_design_components_9vy6.svg').default,
    description: (
      <>
        <code>TailChat</code> 专心设计了一套独有的插件系统，这让外部能力深度集成到 <code>TailChat</code> 成为可能
      </>
    ),
  },
  {
    title: '面向开源',
    Svg: require('../../static/img/undraw_open_source_1qxw.svg').default,
    description: (
      <>
        <code>TailChat</code> 是一个开源软件，任何人都能给TailChat提交自己想要的能力。我们始终相信开源的力量能让一个应用变得更好
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
