// eslint-disable-next-line eslint-comments/disable-enable-pair
import { TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import './styles.scss'

const ws = new WebSocket('ws://localhost:8082')

function ChatApp() {
  const [state, setState] = useState({ message: '', name: '' })
  const [historyMess, sethistoryMess] = useState([])

  useEffect(() => {
    ws.addEventListener('open', () => {
      console.log('We are connected')
    })
    ws.addEventListener('message', event => {
      const x = JSON.parse(event.data) as never
      sethistoryMess([...historyMess, x])
    })
  }, [historyMess])

  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = (e: { preventDefault: () => void }) => {
    const { name, message } = state
    ws.send(JSON.stringify({ name, message }))
    e.preventDefault()
    setState({ ...state, message: '' })
  }

  const renderChat = () => {
    return historyMess.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  )
}

export default ChatApp
