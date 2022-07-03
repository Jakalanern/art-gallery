import styles from '../styles/Gallery.module.scss'
import images from '../data/imageData'

const Gallery = () => {
  return (
    <section className={styles.galleryGrid}>
      {images.map((image) => (
        <img
          src={image.src}
          alt={image.alt}
          key={image.id}
          id={image.id}
          className={styles.image}
        />
      ))}
    </section>
  )
}

export default Gallery
