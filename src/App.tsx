import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent, useState } from "react";

function App() {
  const items = ['akshay1', 'akshay2', 'akshay3', 'akshay4', 'akshay5', 'akshay6'];

  const [count, setCount] = useState(0);

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const handlebtn = (event: MouseEvent) => {
    if (event) {
      console.log('Btn Click ', count);
      setCount(count + 1)
    }
  }

  const handleClearBtn = () => {
    setCount(0)
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dashboard</a>
        </div>
      </nav>
      <br></br>
      <Alert>Hello <span>Akshay</span></Alert>
      <br></br>
      Drop Down Example
      <ListGroup items={items} heading="Names" onSelectItem={handleSelectItem} />
      <br></br>
      <div className="container text-center">
        <div className="row">
          <div className="col-4" style={{ display: "flex", alignItems: "center" }}>
            <p style={{ margin: 0, marginRight: "0.5rem" }}>You clicked {count} times</p>
            <Button onbthItem={handlebtn}>Click <span>Me</span></Button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-primary clear-btn" onClick={handleClearBtn}>
              Clear Value
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;