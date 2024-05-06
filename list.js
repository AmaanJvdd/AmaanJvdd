Step 1: Create a React application using the following command:
npx create-react-app listmapdemo
Step 2: After creating your project folder i.e. listmapdemo, move to it using the following command:
cd listmapdemo
 
Project Structure: It will look like the following : -
 
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
Example: While creating components using the map, react expects a key prop passed to each component being built. It will still render if the key is not passed, but you will see a warning from React about it in the console. In the App.js file, we have defined a list of fruits which is then mapped to a list of divs.
 
// Filename - App.js
 
import React from "react";
 
function App() {
 
​// Declared an array of items
​const fruits = ["Apple", "Mango", "Banana", "GFG"];
 
​// Some styling for the items
​const styles = {
​​backgroundColor: "white",
​​width: "50px",
​​marginBottom: "10px",
​​padding: "10px",
​​color: "green",
​​boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
​};
 
​return (
​​<>
​​​{
​​​​/* This maps each array item to a div adds
​​​​the style declared above and return it */
​​​​fruits.map((fruit) => (
​​​​​<div key={fruit} style={styles}>
​​​​​​{fruit}
​​​​​</div>
​​​​))
​​​}
​​</>
​);
}
 
export default App;
 
 
 
Step to Run Application: Run the application using the following command from the root directory of the project:
npm start
