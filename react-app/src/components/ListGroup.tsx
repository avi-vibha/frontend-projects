import { Fragment } from "react";

function ListGroup() {
  return (
    <>
    <h1>List</h1>
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    </>
  );

  // the above errors are because 'class' is a reserved keyword
  // in js or ts, so we need to rename all of them to 'className'

  // Ctrl + D for multiple selection

  // Ctrl + Shift + P : format document using prettier 
  // Prettier automatically wrapped our jsx markup in parantheses. This is necessary to break the markup in multiple lines
}

export default ListGroup;
