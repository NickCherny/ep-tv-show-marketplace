import React from 'react';

import styles from './styles.module.css';

const EpisodeDetails = ({ name, number, summary, image }) => {
  return (
    <div className={styles.EpisodeDetailsContainer}>
      <header className={styles.EpisodeDetailsHeader}>
        <h2 className={styles.EpisodeDetailsTitle}>
          {name}
        </h2>
        <h3 className={styles.EpisodeDetailsArticle}>Episode - {number}</h3>
      </header>
      <article>
        <div className={styles.EpisodeDetailsDescriptionContent} dangerouslySetInnerHTML={{ __html: summary }} />
      </article>
      {Boolean(image) && (
        <div>
          <img src={image.medium} alt={name} />
        </div>
      )}
    </div>
  )
};

export default EpisodeDetails
