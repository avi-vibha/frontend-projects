import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; // moving this to App.tsx
  //items = [];

  // check tutorial-points document
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // rendering conditionally inside our jsx expression
  // storing the logic in a separte variable or constant, to prevent polluting our jsx

  // moving the logic inside a function
  // benefit of using a function is that we can pass parameters
  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null; // adding a ternery operator
  };*/

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event); //This is called type annotation in ts

  return (
    <>
      <h1>{heading}</h1>
      {/*items.length === 0 ? <p>No item found</p> : null*/}
      {/*replacing the terneary operator with logical and, and value that will be returned if the condition is true*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/*In react each element has a property called on click */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } /* rendering/adding classes dynamically */
            key={item}
            // The arrow function can optionally have a parameter that represents the browser event
            //onClick={handleClick} // Calling the function will be done at runtime
            onClick={() => {
              setSelectedIndex(index);
            }} // Updating the selectedIndex on click
          >
            {item}
          </li>
        ))}
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
