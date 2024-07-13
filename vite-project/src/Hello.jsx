function Hello() {
  let number = 456
  let name = () => {
    return "Dota 2"
  }
  return (<p>My hobby is to play games at free time {name()} at {number}</p>)
}
export default Hello;