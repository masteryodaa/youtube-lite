const Button = ({name, key}) => {
  return (
    <div className="buttons px-4 py-2 mx-2" key={key}>{name}</div>
  )
}

export default Button