import { useState } from "react"
import { Button } from "./components/Button/Button"

function App() {
  const [count, setCount] = useState(0);
  const [isReversed, setIsReversed] = useState(true);
  
  const minValue = 0
  const maxValue = 50
  const delta = 10
  
    const handleClick = () => {
      if (isReversed) {
        if (count < maxValue) {
          setCount(count + delta);
        } else {
          setIsReversed(false);
          setCount(count - delta);
        }
      } else {
        if (count > minValue) {
          setCount(count - delta);
        } else {
          setIsReversed(true);
          setCount(count + delta);
        }
      }
    }
  return (
    <div className = 'page'>
      <div className = "counter">
        {count}
        <Button label={"Counter"} onClick={handleClick} />
      </div>
    </div>
  )
}
export default App
