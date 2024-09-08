"use client"

import { useEffect, useState } from 'react';
import styles from './custom.module.css'
import Image from 'next/image'

interface db1{
    id : number
    list : string
    pill : Pill[]
}

interface Pill{
    id : number
    field : string
    price : string
    style : {}
    text : Text[]
}

interface Text{
    id : number
    text : string
    style : {}
}
 
const CustomContent = () =>{
    const [Db1, setDb1] = useState <db1[]>([]);
    const [active, setActive] = useState<string>("Text");
    const [selectedPillField, setSelectedPillField] = useState<string>("cloud");

    useEffect(()=>{
    async function dbCloth(){
        const res = await fetch('db/db1.json');
        const data = await res.json();
        setDb1(data.db1);
    }
        dbCloth();
    },[])

    const handleClick = (list: string) => {
        setActive(list);
    };

    const handleGridItemClick = (field: string) => {
        setSelectedPillField(field);
    };
    

    return(
        <>
            <div className={styles.container}>
                <div className={styles.container1}>
                    <div className={styles.blok1}>
                            <Image className={styles.tshirt} src='/tshirt1.svg' alt='' width={450} height={450}></Image>
                            {Db1.map((item) => (
                                item.list === active && (
                                <div key={item.id} className={styles.preview}>
                                    {item.pill.map((Pill) => (
                                    <span key={Pill.id}>
                                        {selectedPillField === Pill.field && (
                                        <div>
                                            {Pill.text && Pill.text.map((Text) => (
                                                <p 
                                                    key={Text.id}  
                                                    style={Text.style}
                                                >
                                                        {Text.text}
                                                </p>
                                            ))}
                                        </div>
                                        )}
                                    </span>
                                    ))}
                                </div>
                                )
                            ))}
                    </div>
                    <div className={styles.blok2}>
                        <ul>
                            <li>numb</li>
                            <li>item</li>
                            <li>color</li>
                            <li>price</li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.container2}>
                    <div className={styles.block3}>
                        {Db1.map((item)=>(
                            <ul key={item.id}>
                                <li 
                                    onClick={() => handleClick(item.list)}
                                    className={`${active === item.list ? styles.active : ""}`}
                                >
                                    {item.list}
                                </li>
                            </ul>
                        ))}
                    </div>

                    
                    <div className={styles.block4}>
                        {Db1.map((item)=>(
                            <div key={item.id} className={styles.grid}>
                                {active === item.list && (
                                    <div>
                                        {item.pill.map((Pill) =>(
                                            <div key={Pill.id} onClick={() => handleGridItemClick(Pill.field)} className={`${styles.grid1} ${selectedPillField === Pill.field ? styles.active1 : ""}`}>
                                                <p style={Pill.style}
                                                className={styles.field}
                                                >
                                                    {Pill.field}
                                                </p>
                                                <p className={styles.price}>{Pill.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                   
                </div>
                
            </div>
        </>
    )
}

export default CustomContent