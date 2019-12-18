import {Link} from "react-router-dom";
import React from "react";

import { createUrlForCurrentEpisode, createUrlForCurrentShow } from '../../utils/nav';
import styles from './styles.module.css';

const ItemShowCard = ({ id: showId, image, name, episodes }) => (
  <article className={styles.ItemShowCardContainer}>
    <div className={styles.ItemShowHeaderContent}>
      <img className={styles.ItemShowCardMedia} src={image.medium} alt={name}/>
      <div>
        <Link to={createUrlForCurrentShow(showId)}>
          <h3 className={styles.ItemShowCardTitle}>
            {name}
          </h3>
        </Link>
        <div className={styles.ItemShowCardHeaderSection}>
          Duration-{episodes.length}
        </div>
      </div>
    </div>
    <div>
      <h4 className={styles.ItemShowCardEpisodeListTitle}>Episodes: </h4>
      <ul className={styles.ItemShowCardEpisodesList}>
        {episodes.map(({ id: episodeId, name, number }) => (
          <li className={styles.ItemShowCardEpisodeItemContainer} key={episodeId}>
            <Link style={{ textDecoration: 'none' }} to={createUrlForCurrentEpisode({ showId, episodeId })}>
              <span className={styles.ItemShowCardEpisodeItem}>
                {number},
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ItemShowCard;
