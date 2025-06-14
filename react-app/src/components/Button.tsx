interface Props {
    text:string
}
const handleClick=()=>{
    console.log("clicked")
}
const Button = ({text}:Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleClick}>{text}</button>

    </div>
  )
}

export default Button
