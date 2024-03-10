import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import Counter from "./Counter"
import Feature from "./Feature"
import "./App.css"

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <Feature flag="react_logo">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Feature>
      </div>
      <h1>Feature Flags</h1>
      <div className="card">
        <Feature flag="counter">
          <h3>Counter is our feature</h3>
          <Counter />
        </Feature>
      </div>
    </>
  )
}

export default App
