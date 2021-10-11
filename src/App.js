import {GlobalStyle} from "./GlobalStyle"
import {Header} from "./components/Header"
import {Main} from "./components/Main"
function App() {
  

  return (

    <div className="container">
      <div className="container-content">

        <Header/>
        <Main />
        <GlobalStyle/>

      </div>
    </div>
  );
}

export default App;
