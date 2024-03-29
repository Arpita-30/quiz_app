import React, { useContext, useState } from 'react'
import { MyContext } from './App';


const Answer = () => {
    const { final } = useContext(MyContext);
    console.log(final);
    return (

        <div className='card'>
            <h1 className='title'>Answers 📖</h1>
            {final.map((data, i) => {
                return <><h1>{data.question}</h1>
                    {data.options.map((option, index) => {
                        return <>
                            <p style={(data.userAnswer === data.answers[option]) ? { color: (data.userAnswer === data.answers[0]) ? "green" : "red" } : {}}>{data.answers[option]}</p>

                        </>
                    })}
                    <h3>Correct Answer : {data.answers[0]} </h3>
                </>

            })}</div>
    )
}

export default Answer