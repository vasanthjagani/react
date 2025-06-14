import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

import Message from "./Message";

function App() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        header={"header"}
        onSelectItem={handleSelectItem}
      />
      {/* <Alert>
        Alert<h1>hello</h1>
      </Alert> */}
      <Button text={"hello"} />
    </div>
  );
}

export default App;
