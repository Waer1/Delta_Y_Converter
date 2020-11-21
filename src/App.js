import {Header} from "./component/header/header"
import {Y} from "./component/body/ytoDElta/Y"
import {Delta} from "./component/body/DeltaToy/delta"
import { Fragment } from "react"
import "./App.css"

function App() {
  return (
    <Fragment>
      <Header/>
      <div id="clear"></div>
      <Delta />
      <Y/>
  </Fragment>
  );
}

export default App;
