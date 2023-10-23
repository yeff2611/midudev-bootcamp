import React from 'react'
import ReactDOM from 'react-dom'

// Primera forma
// const Title = ({course}) => <h1>{course}</h1>
// Segunda forma
// const Title = ({course}) => {
//   <h1>{course}</h1>
// }
// Tercera forma
// const Title = ({course})=>{
//   return <h1>{course}</h1>
// }

// Cuarta forma
const Title = (props) => {
  const { course } = props
  return <h1>{course}</h1>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course + ' Titulo'} />
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3} </p>
    </div>
  )

}
ReactDOM.render(<App />, document.getElementById('root'))