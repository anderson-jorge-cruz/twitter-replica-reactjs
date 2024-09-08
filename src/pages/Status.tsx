import { useState, type FormEvent, type KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState([
    'Isso mesmo!',
    'Faz sentido',
    'Gostei da sua ideia'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  function hangleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className='status'>
      <Header title='Tweet' />
      
      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae necessitatibus veniam eligendi ipsum atque voluptatibus, est eaque perferendis suscipit corporis porro. Molestiae veritatis incidunt voluptatum ea eaque, harum ad tenetur?" />

      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/anderson-jorge-cruz.png' alt='Diego Fernandes' />
          <textarea
            value={newAnswer}
            onKeyDown={hangleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            id='tweet'
            placeholder="Tweet your answer"
          />
        </label>

        <button type='submit'>Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}