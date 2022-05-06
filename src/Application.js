import React from 'react';


import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { text, navigation } from './data';


const Application = () => {
  return (
    <div className="wrapper">
      <Header items={navigation}/>
      <Content listItem={text}/>
      <Footer />      
    </div>
  )
};

export default Application;
