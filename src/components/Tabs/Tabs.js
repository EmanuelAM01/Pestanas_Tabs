import React, {useState} from "react";
import styles from './Tab.module.css'

const Tab = () =>{
    const [show, setShow] = useState({
        index:"",
        content: ""
    })

    const [Tab, setTab] = useState([
    {
        index: 1,
        content: "My first language was Python"
    },
    {
        index: 2,
        content:"Hello World! was my first proyect with Python "
    },
    {
        index: 3,
        content:"Actually I´m learning MERN"
    }
    ])

    const onClickHandler = (e, tab) =>{
        e.preventDefault();
        setShow({
            index: tab.index,
            content: tab.content
        });
    }

    return(
        <div className={styles.principal}>
        <div className={styles.contenedorBotones}>
        { Tab.map((tab)=>{ return <button className={styles.boton} onClick={(e) => onClickHandler(e, tab)}><span>Tab {tab.index}</span></button>})}
        </div>
        {
            show.index === ""?<div>Please Click one Tab</div>:
            <div><h1>TAB {show.index}</h1>
            <p>{show.content}</p>
            </div>
        }
        </div>
        )
}
export default Tab;