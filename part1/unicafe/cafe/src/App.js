import { useState } from 'react'


const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Information = ({ rating, numberOfRatings }) => {
  return (
    <p>{rating} {numberOfRatings}</p>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr><td>{text}</td><td>{value} %</td></tr>
    );
  }
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  );
}

const Statistics = ({ good, neutral, bad }) => {
  const calculateTotal = () => good + neutral + bad
  const calculateAverage = () => (good - bad) / calculateTotal()
  const calculatePostive = () => good / calculateTotal() * 100

  if (calculateTotal() != 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={calculateTotal()} />
            <StatisticLine text="average" value={calculateAverage()} />
            <StatisticLine text="positive" value={calculatePostive()} />
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p>No feedback given</p>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App