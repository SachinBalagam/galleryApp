// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onUpdateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = imagesList

  const onImageUpdate = () => {
    onUpdateImage(imageUrl, imageAltText)
  }

  const ActiveThumbnail = isActive ? '' : 'blur'

  return (
    <li className="each-thumbnail">
      <button type="button" className="button" onClick={onImageUpdate}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={ActiveThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
