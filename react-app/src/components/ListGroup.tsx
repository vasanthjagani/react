import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
interface Props {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, header, onSelectItem }: Props) {
  const x = 2;

  const [getIndex, setIndex] = useState(0);

  return (
    <Fragment>
      <h1>{header}</h1>
      {items.length === 0 && "data not found"}
      <ul className="list-group">
        {items.map((item, index) => (
          //   <li className="list-group-item" key={item} onClick={()=>console.log("clivked",item)}>
          //     {index + " . " + item}
          //   </li>
          //   <li className={`${getIndex==index ?"list-group-item active": "list-group-item"}`} key={item} onClick={()=>setIndex(index)}>
          //     {index + " . " + item}
          //   </li>
          <li
            className={`${
              getIndex == index ? "list-group-item active" : "list-group-item"
            }`}
            onClick={() => {
              setIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
