import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './sty.css'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
      <p>React Rendering App</p>
    </div>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Go to Google Page</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click Here For Google'
)

const brekline=(
  <br />
)

const newele= (
  <a href="https://www.amazonindia.com" target='_blank'>Go to Amazon.in</a>
)

createRoot(document.getElementById('root')).render(
  <>
    <MyApp />
    {brekline}
    <App />
    {brekline}
    {anotherElement}
    {brekline}
    {newele}
    {brekline}
    {reactElement}
  </>
)