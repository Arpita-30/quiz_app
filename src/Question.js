import React, { useRef, useState, useEffect } from 'react'

import { useOutletContext } from 'react-router';

import { useContext } from 'react';

import { MyContext } from './App';

import { useNavigate } from 'react-router-dom';

import "./Question.css"


const Question = () => {

    //const ques = useOutletContext();
    const { value: ques, final, setFinal, answer, setAnswer } = useContext(MyContext);

    const navigate = useNavigate();

    //console.log(ques);

    const [index, setIndex] = useState(0);

    const [checked, setChecked] = useState({

    });

    //const [correct, setCorrect] = useState(0);







    const options = useRef([1, 2, 3, 4]);

    const [randomizedArr, setRandomizedArr] = useState([]);

    //console.log(options);


    const randomArray = () => {
        //console.log(randomIndex);
        setRandomizedArr([]);
        options.current = [0, 1, 2, 3];
        let temp = [];
        while (options.current.length > 0) {
            var randomIndex = Math.floor(Math.random() * options.current.length);
            //console.log(randomIndex);
            // if (randomArray.includes(randomIndex)) {
            //     continue;
            // }
            temp.push(options.current[randomIndex]);

            options.current.splice(randomIndex, 1);
        }
        setRandomizedArr(temp);
    }

    //console.log(randomizedArr);


    const handleNext = (isSubmit) => {
        if (isSubmit) {
            handleAnswer();
            return
        }
        setIndex(index + 1);


    }


    const checkChecked = (index, e, userAns) => {
        setChecked({ ...checked, [index]: e.target.value });
        // console.log(checked);
        //console.log(userAns);
        setFinal([...final, { question: ques[index].question, options: randomizedArr, userAnswer: userAns, answers: answer }])

    }
    

    const handleAnswer = (e) => {
        let correct = 0;
        for (let i = 0; i < ques.length; i++) {
            if (checked[i] && checked[i] === "correct")
                correct += 1;
        }
        //alert(`Correct answers are ${correct} / ${ques.length} `);
        navigate("/answer")


    }
    console.log(final);


    useEffect(() => {
        setAnswer([ques?.[index]?.correct_answer, ...ques?.[index]?.incorrect_answers])
        randomArray();
    }, [index])

    //console.log(answer);
    return (
        <div>
            <div class="card">
                <h3 className='checked'>Attempted: {Object.keys(checked).length}</h3>
                <h1>{ques?.[index]?.question}</h1>

                <form action="" >


                    {answer.map((data, i) => {
                        return <div className='options' >
                            <input type="radio"
                                onClick={(e) => checkChecked(index, e, answer[randomizedArr[i]])}
                                value={i === 0 ? "correct" : "incorrect"}
                                name={index}

                            />
                            <p > {answer[randomizedArr[i]]}</p>
                        </ div>

                    })}
                </form>

                <button onClick={() => handleNext((ques.length - 1) === index)} className='create__quiz'>{(ques.length - 1) === index ? "submit" : "next"}</button>

            </div>

        </div>
    )
}

export default Question