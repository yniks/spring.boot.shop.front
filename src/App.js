import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Image from './components/Image.js';
import Color from './components/color.js';
import InTheBox from './components/InTheBox';
import Specs from './components/Specs';
import Accordian from './components/accord';
import ProductView from './components/productView';
function App() {
  return (
    <div className="App">

      {/* <Image images={["https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg","https://images-na.ssl-images-amazon.com/images/I/719CgfLcqNL._SL1500_.jpg","https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg"]} /> 
      <Color colors={["red","blue","black","purple","pink"]}  color={1}/>
      <InTheBox />
      <Specs/> */}
      {/* <Accordian text={["hi","there"]} initial="closed" header="Details"/> */}
      < ProductView product={{ specialOffer: "What powers the air-conditioning on commercial planes?", name: "Apple Iphone 11", shortDetail: "Also, when I use nodemon as a wrapper (nodemon --exec babel-node server.js) my hot module reloading doesn't work, but I still find myself in want of a way to easily restart the server.", images: ["https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg", "https://images-na.ssl-images-amazon.com/images/I/719CgfLcqNL._SL1500_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41ClQ3J0gjL._SL1000_.jpg"], description: ["A", "B", "C", "D"] }} ></ProductView>
      {/* <FunctionClick/>
      <ClassClick/>
      <Counter rate={4}/>
      <Message/> */}
      {/*<Greet name="bruce" heroname="batman">
        <p>this is children props</p></Greet>
        <Greet name="diana" heroname="wonder woman ">
          <button>action</button>
          </Greet>
      <Welcome name="bruce" heroname="batman"/>
      <Welcome name="diana" heroname="wonder woman "/>
      {/*<Hello />*/}
    </div>
  );
}

export default App;
