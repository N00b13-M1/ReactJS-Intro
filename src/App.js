
function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Temps Javascripts {tempsJavascript} millisecondes</p>
          <p>Temps PHP {tempsPHP/1000} millisecondes</p>
          <p>Today is {dateCourante.getMonth()}/{dateCourante.getMonth()+1}/{year} millisecondes</p>
        </header>
      </div>
      <footer>Molengeek TM</footer>
    </div>
  );
}

export default App;
