import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import { Calendar } from "./components/Calendar";

import './App.css'

function App() {  

  return (
    <div className="wrapper">
	<Header />		
  <Main />
  <Column />
  <Card />
  <PopBrowse />
  <PopNewCard />
  <PopUser />
  <Calendar />
    </div>
    );
}

export default App;
