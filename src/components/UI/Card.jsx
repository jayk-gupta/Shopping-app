import './Card.css' 

const Card = (props) => {
  const classes = 'card ' + props.className;
  return (
    <div className={classes}>
      {props.children}
      {/* children is a reserved name,value = content between opening and closing tag of custom component */}
    </div>
  )
}

export default Card;