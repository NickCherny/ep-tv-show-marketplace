import {Link} from "react-router-dom";
import React from "react";

import styles from './styles.module.css';

const ItemShowCard = ({ id, image, name, summary, episodes }) => (
  <article className={styles.ItemShowCardContainer}>
    <img className={styles.ItemShowCardMedia} src={image.medium} alt={name}/>
    <div className={styles.ItemShowCardBody}>
      <Link to={`/show/${id}`}>
        <h3>
          {name}
        </h3>
      </Link>
      <div>
        <span
          dangerouslySetInnerHTML={{
            __html: summary
          }}
        />
      </div>
    </div>
    <div className={styles.ItemShowEpisodesView}>
      {episodes.map(item => (
        <Link to={`/show/${id}/episode/${item.id}`}>
          <span className={styles.ItemShowEpisodeLink}>{item.name}</span>
        </Link>
      ))}
    </div>
  </article>
);

export default ItemShowCard;
