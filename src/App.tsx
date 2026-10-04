import './App.css'
import styled from "styled-components";
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skill } from './layout/section/skills/Skill';
import { Works } from './layout/section/works/Works';
import { Citatki } from './layout/section/citatki/Citatki';
import { Achievment } from './layout/section/achievment/Achievment';
import { WhatNew } from './layout/section/news/WhatNew';
import { Testimony } from './layout/section/testimony/Testimony';
import { Footer } from './layout/footer/Footer';
import { Contact } from './layout/section/contact/Contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skill/>
            <Works/>
            <Citatki/>
            <Achievment/>
            <WhatNew/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    )
}


export default App

