import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" rel="noreferrer" target='_blank'>visit google</a>
)

const anotherUser = " arjun"

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
  
)
