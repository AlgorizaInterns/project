import '../styles/RatingStars.css'

const RatingStars = ({ rating, up }) => {
  const ratingStars = []
  for (let i = 1; i <= 5; i++) {
    ratingStars.push(
      <span
        key={i}
        className={`material-icons-outlined star-icon ${
          rating >= i && 'stared'
        }`}
      >
        {rating >= i ? 'star' : 'star_outline'}
      </span>
    )
  }
  return (
    <div className='rating-stars'>
      {ratingStars}
      <span className='up'>{up && '& up'}</span>
    </div>
  )
}

export default RatingStars
