import { Fragment } from "react";

function ListGroup() {

  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']; 

  return (
   <>
    <h1>List</h1>
    <ul className="list-group">
        {items.map(item=><li className="list-group-item" key={item}>{item}</li>)}
    </ul>
   </>
  );

  // the above errors are because 'class' is a reserved keyword
  // in js or ts, so we need to rename all of them to 'className'

  // Ctrl + D for multiple selection

  // Ctrl + Shift + P : format document using prettier 
  // Prettier automatically wrapped our jsx markup in parantheses. This is necessary to break the markup in multiple lines

  // No for loop in jsx

  // map method is used to take elements from an array and convert it to a different type

  // CHECK tutorial-points.odt in public folder. 
}

export default ListGroup;
