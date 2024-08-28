import { useState } from "react";
import style from './FirstPage.module.css';
import plus from './img/plus.png';
import x from './img/x.png';



    export function FirstPage(props) {
        const [show0, setShow0] = useState(false);
        const [show1, setShow1] = useState(false);
        const [show2, setShow2] = useState(false);
        const [show3, setShow3] = useState(false);
       
    
    
        function hide0() {
            if(show0===false) {
                setShow0(true)
            }
            if(show0===true) {
                setShow0(false)
            }}
            function hide1() {
            if(show1===false) {
                setShow1(true)
            }
            if(show1===true) {
                setShow1(false)
            }}
            function hide2() {
            if(show2===false) {
                setShow2(true)
            }
            if(show2===true) {
                setShow2(false)
            }}
            function hide3() {
            if(show3===false) {
                setShow3(true)
            }
            if(show3===true) {
                setShow3(false)
            }}
            
    
        
        return <>
        <h2>Užduodami klausimai</h2>
    
       <section className={style.container}>
        <div  className={style.questionContainer}>
            <button onClick={() => hide0()} className={style.question}>Kas tai?
                <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </button>
            <p style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Tai pagalba kai griūna planai, kai norisi gyventi, dalintis įspūdžiais, norisi draugijos, palaikymo.</p>
        </div>
    
        <div className={style.questionContainer}>
            <button onClick={() => hide1()} className={style.question}>Kada?
                <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </button>
            <p style={show1===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Kai lyja, sninga, pučia, ar saulė šviečia...</p>
        </div>
    
        <div className={style.questionContainer}>
            <button onClick={() => hide2()} className={style.question}>Kur?
                <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </button>
            <p style={show2===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Klaipėda, tačiau galima pakeisti ir vietą.</p>
        </div>
    
        <div className={style.questionContainer}>
            <button onClick={() => hide3()} className={style.question}>Kada priimami užsakymai?
                <img style={show3===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                <img style={show3===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
            </button>
            <p style={show3===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Užsakymus priimu pagal užimtumą. Nesidrovėkite, jei iki įvykio liko trys valandos Klaipėdoje.</p>
        </div>


    
       </section>
    
    
        
        </>
    }
   
   
  
    
    
