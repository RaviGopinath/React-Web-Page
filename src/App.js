import logo from './logo.svg';
import './App.css';
import Head from "./header/head";
import Body from "./body/body";
import Images from "./imgcontent/imageContent";
import Contact from "./contact/contact";
import Props from './p/props';


function App() {
  return (
    <div>
      <Head />
      <Body />
      <Images />
      <Contact />
      <Props />
    </div>
  );
}

export default App;
