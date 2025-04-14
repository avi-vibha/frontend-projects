1. Install node 
2. In VS code install Prettier extension and check 'Format on save' in vs code settings


Creating a React Application 
1. Create React App (CRA) - official tool provided by the react team 
2. Vite - faster and provides smaller bundle sizes

1. Run the command "npm create vite@latest"
2. Specify the project name
3. Select the framework
4. Select the language - Typescript
5. cd into the project folder
6. npm install
7. npm run dev


Run "Set-ExecutionPolicy Unrestricted" in Windows powershell (admin) to fix script running errors. 

Project Structure

node_modules - Third party libraries are installed
public - public assets like images/media and so on
src
App.tsx - Intially we will have a single component called the App component

index.html - basic html template - 
		the div with the id of root is the container for our application 
		script element referencing /src/main.tsx   - entry point to our application 

package.json - information about the project name, version, dependencies. devDependencies - only used for development and will not be deployed with the application 
tsconfig.json - settings to tell our compiler how to compile our code 
vite.config.ts - configuration file 

Message.tsx - .ts for plain typescript files and .tsx for React components 

'hmr' in the terminal stands for Hot Module Replacement. Vite under the hood monitors our files for changes. When there are changes it will automatically refresh
our page and the browser
 
