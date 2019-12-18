import React from 'react';
import { Link } from 'react-router-dom';

import { createUrlForCurrentEpisode } from '../../utils/nav';
import styles from './styles.module.css'

const ShowDetails = ({ id, name, summary, image, episodes }) => (
  <section className={styles.ShowDetailsContainer}>
    {Boolean(image) && (
      <div className={styles.ShowDetailsMediaContainer}>
        <img className={styles.ShowDetailsMediaImage} src={image.medium} alt={name} />
      </div>
    )}
    <div className={styles.ShowDetailsBodyContainer}>
      <h2 className={styles.ShowDetailsBodyTitle}>{name}</h2>
      <div
        className={styles.ShowDetailsBodyContent}
        dangerouslySetInnerHTML={{
          __html: summary
        }}
      />
      <ul className={styles.ShowDetailsDetailsList}>
        {episodes.map(({ name: episodeName, id: episodeId, number }) => (
          <Link key={episodeId} style={{ textDecoration: 'none' }} to={createUrlForCurrentEpisode({ showId: id, episodeId })}>
            <li className={styles.ShowDetailsItemColumn}>
              <span className={styles.ShowDetailsItemColumnArticle}>{episodeName}</span>
              <span className={styles.ShowDetailsItemColumnText}>({number})</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  </section>
);

export default ShowDetails;
