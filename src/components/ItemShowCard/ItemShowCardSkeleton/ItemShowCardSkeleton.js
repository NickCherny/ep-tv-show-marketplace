import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { useWindowDimensions } from '../../../utils/hooks';

import styles from './styles.module.css'

const ItemShowCardSkeleton = () => {
  const { width } = useWindowDimensions();
  const lineWidth = width / 2 - 32;

  return (
    <div className={styles.ShowCardSkeletonContainer}>
      <div className={styles.ShowCardSkeletonMediaContainer}>
        <Skeleton variant="rect" width={90} height={90} />
      </div>
      <div>
        <div className={styles.ShowCardSkeletonLabel}>
          <Skeleton variant="rect" width={lineWidth} height={30} />
        </div>
        <div className={styles.ShowCardSkeletonLabel}>
          <Skeleton variant="rect" width={lineWidth} height={30} />
        </div>
        <div className={styles.ShowCardSkeletonLabel}>
          <Skeleton variant="rect" width={lineWidth} height={30} />
        </div>
      </div>
    </div>
  );
}

export default ItemShowCardSkeleton;
