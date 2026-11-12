import './App.css'

function Button({ text = "Click me", color = "blue", fontSize = 16, handleClick}) {
  const buttonStyle = {
    color,
    fontSize: fontSize + "px",
  }

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  )
}


function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  }

  return (
    <div>
      <Button />
      <Button text="Don't click me!" color="red"/>
      <Button fontSize={20} handleClick={() => handleButtonClick('https://www.google.com')} />
    </div>
  )
}

export default App
