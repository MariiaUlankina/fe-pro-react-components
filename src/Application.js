import React from 'react';


import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//import { text, navigation } from './data';


const Application = () => {
const navigation = [
    {
      link: '/',
      title: 'Home'
    },
    {
      link: '/#about',
      title: 'About us'
    },
    {
      link: '/#contact',
      title: 'Contact us'
    },
    {
      link: '/#help',
      title: 'Help page'
    },
  ];

const text = [
    {
      title: '15 полезных однострочных выражений JavaScript',
      content: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners'
    },
    {
      title: 'Полиморфизм простыми словами',
      content: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё'
    },
    {
      title: 'Начало работы с Node.js',
      content: 'Node Hero: Глава 1',
    },
    {
      title: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      content: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).'
    },
    {
      title: '8 практичных хитростей веб-разработчика применить немедленно!',
      content: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately'
    },
    {
      title: 'Насколько JavaScript сильный?',
      content: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?'
    },
    {
      title: 'Изучите CSS-переменные за 5 минут',
      content: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.'
    },
    {
      title: 'Создание MEVN-приложения (Часть 1/2)',
      content: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)'
    },
    {
      title: 'Реактивность Vue.js',
      content: 'Реактивность фреймворка Vue.js и использование метода Vue.set'
    },
    {
      title: 'Микроптимизации производительности и JavaScript',
      content: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…'
    },
    {
      title: 'Девшахта-подкаст',
      content: '#108: Производительность кода — это важнейший критерий качества?'
    },
    {
      title: 'Одна из самых красивых идей в информатике: Y-Combinator',
      content: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”'
    },
  ];
  return (
    <div className="wrapper">
      <Header items={navigation}/>
      <Content listItem={text}/>
      <Footer />      
    </div>
  )
};

export default Application;
