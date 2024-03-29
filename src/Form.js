
import React, { useContext, useState } from 'react'
import { Outlet } from "react-router-dom";
import "./Form.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './App';


const Form = () => {

    const navigate = useNavigate();

    const { setValue } = useContext(MyContext);

    // const [formDetails, setFormDetails] = useState([
    //     {
    //         length: "",
    //         category: "",
    //         level: ""

    //     }
    // ])

    const [length, setLength] = useState("");
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");

    let url = "";
    let data = "";

    const [ques, setQues] = useState([

    ])

    const handleFormCategory = (e) => {
        //setFormDetails({ category: e.target.value });
        setCategory(e.target.value)

    }
    const handleFormLength = (e) => {
        //setFormDetails({ length: e.target.value });
        setLength(e.target.value)
    }
    const handleFormLevel = (e) => {
        //setFormDetails({ level: e.target.value });
        setLevel(e.target.value)
    }
    const handleFormDetails = (e) => {
        e.preventDefault();
        console.log(category);
        console.log(level);
        console.log(length);
        url = `https://opentdb.com/api.php?amount=${length}&category=${category}&difficulty=${level} `
        console.log(url);
        fetchQuestions(url);
    }

    const fetchQuestions = async (url) => {
        //const response = await axios.get(url).catch(err => console.log(err))
        const response = { "response_code": 0, "results": [{ "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "How many points did LeBron James score in his first NBA game?", "correct_answer": "25", "incorrect_answers": ["19", "69", "41"] }, { "category": "Sports", "type": "multiple", "difficulty": "easy", "question": "Who won the premier league title in the 2015-2016 season following a fairy tale run?", "correct_answer": "Leicester City", "incorrect_answers": ["Tottenham Hotspur", "Watford", "Stoke City"] }] }
        if (response) {
            data = response.results;
            setValue(data);
        }
        navigate("/question");


    }


    return (
        <div className='container'>

            <div className="card" >
                <form action="">
                    <h1 className='title'>Setup quiz ✏️ </h1>
                    <label htmlFor="" className='form__ques' >No of questions</label>
                    <input type="number"
                        name="length"
                        value={length}
                        onChange={handleFormLength}
                        className='dynamic__input'
                    />
                    <label htmlFor="" className='form__ques'>Category</label>

                    <select name="category"
                        onChange={handleFormCategory}
                        value={category}
                        className='dynamic__input'
                    >
                        <option value="23" >history</option>
                        <option value="21" >sports</option>
                        <option value="Science" >science</option>

                    </select>
                    <label htmlFor="" className='form__ques'>Difficulty level</label>

                    <select name="level"
                        onChange={handleFormLevel}
                        value={level}
                        className='dynamic__input'
                    >
                        <option value="easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>

                    </select>
                    <br />

                    <button type="submit" onClick={handleFormDetails} className='create__quiz'>Start</button>


                </form>
            </div>





        </div >
    )
}

export default Form