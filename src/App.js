import './App.css'
import office from './office.jpg'
import { Button } from './Button'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Office attendance helper</h1>
        <img src={office} alt='fun-office' />
        <p>Should I go to the office today?</p>
        <Button />
      </header>
    </div>
  )
}

export default App
