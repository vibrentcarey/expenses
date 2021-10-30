import './Card.css'

const Card = ({ className, children }) => {
  const classes = `card ${className}`
  return (
    <article className={classes}>
      {children}
    </article>
  )
}

export default Card