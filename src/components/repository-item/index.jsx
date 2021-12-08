import PropTypes from 'prop-types'
import React from 'react'
import Shiitake from 'shiitake'

import StarIcon from '../../assets/ic-star.svg'
import ArrowIcon from '../../assets/ic-arrow.svg'

import styles from './styles.css'

const RepositoryItem = ({ name, description, stargazersCount, owner }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <Shiitake lines={2} throttleRate={200} className={styles.text} tagName='p'>
        {description}
      </Shiitake>
      <div className={styles['container-details']}>
        <div className={styles['details-star']}>
          <svg viewBox={StarIcon.viewBox} className={styles['details-star-icon']}>
            <use xlinkHref={`#${StarIcon.id}`} />
          </svg>
          <p className={styles.text}>{stargazersCount} </p>
        </div>
        <a href={owner.htmlUrl} target='_blank' rel='noreferrer noopener' className={styles['details-user']}>
          <p className={styles.text}>More repositories from {owner.login} </p>
          <svg viewBox={ArrowIcon.viewBox} className={styles['details-user-icon']}>
            <use xlinkHref={`#${ArrowIcon.id}`} />
          </svg>
        </a>
      </div>
    </div>
  )
}

RepositoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazersCount: PropTypes.number,
  owner: PropTypes.shape({
    login: PropTypes.string,
    htmlUrl: PropTypes.string,
  }).isRequired,
}

RepositoryItem.defaultProps = {
  description: '',
  stargazersCount: 0,
}

export default RepositoryItem
