// Write your code here.
import './index.css'

const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className={`${className} similar-card`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt="icon" className="image" />
    </li>
  )
}

export default CardItem
