import Header from "./components/Header"
import UserInput from "./components/UserInput"
import { useState } from "react"
import Results from './components/Results'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 300,
    expectedReturn: 8,
    duration: 4
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput(
      prevUserInput => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
        }
      }
    )
  }


  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results userInput={userInput}/>
    </>
  )
}

export default App