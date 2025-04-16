//.ts for plain typescript files and .tsx for React components

// 2 ways to create a React component - Using a javascript class or function 
// function based components are recomennded

//Pascal Casing - Capitalize the first letter of every word
function Message () {
    // Writing html code in the middle of javascript code 
    // the following is JSX : JavaScript XML 
    // Under the hood the below code will be compiled to JS. visit babeljs.io/repl to check how the below code will be compiled to JS

    //We can create dynamic content
    const name = 'Vibha'
    // expression - piece of code that produces a value
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message; //Exporting so that it can be used somewhere else 

