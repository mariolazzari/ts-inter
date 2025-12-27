import { useState } from "react";
import Button from "./button";

function App() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <Button onClick={onClick}>Click: {count}</Button>
    </div>
  );
}

export default App;
