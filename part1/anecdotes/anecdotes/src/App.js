import { useState } from 'react'


const Heading = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const largestNumber = () => {
    return points.reduce((m, n, i) => n > (points[m] ?? -Infinity) ? i : m, -1)
  }
 
  const getMostVotesAnecdote = () => {
    return(
      <p>{anecdotes[largestNumber()]}</p>
    )
  }

  const nextAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const voteForAnecdote = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Heading text="Anecdote of the day"/>
      {anecdotes[selected]}
      <div>
        has {points[selected]} votes
      </div>
      <Button handleClick={voteForAnecdote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <Heading text="Anecdote with the most votes" />
      {getMostVotesAnecdote()}
    </div>
  )
}

export default App