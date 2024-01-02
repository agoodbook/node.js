import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import { RandomItem } from "@site/src/data";
import { NavigationItem, Navigations } from "@site/src";

function Feature(props: NavigationItem) {
  const { title, smallTitle, url, icon: Icon } = props;

  const handleOpen = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={clsx("col col--4 pointer")} onClick={() => handleOpen(url)}>
      <div className="navigation-item">
        <Icon />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className="ellipsis">{smallTitle}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [featureList, setFeatureList] = useState<Navigations>([]);

  useEffect(() => {
    setFeatureList(RandomItem);
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props: NavigationItem, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
