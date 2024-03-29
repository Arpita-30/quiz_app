import React, { useState } from 'react'



const Newagain = () => {



    const [question, setQuestion] = useState([{
        title: "",
        options: [{ name: "option 1 ", value: false }, { name: " option 2", value: false }],
    }])

    // const [post, setPost] = useState({
    //     text: "",
    //     userId: "",
    //     image: "",
    //     likes: [{ value: false, userId: "" }],
    //     comments: [{ userId: "", content: "", time: "" }],
    //     time: ""

    // })
    const handleQues = (e) => {
        const val = e.target.value;
        setQuestion({ ...question, title: val });
    }
    const addOption = (e, i) => {
        const temp = question.map((ques, index) => {
            if (index !== i) return { ...ques }
            const temp = [...ques.options, { name: `option ${ques.options.length + 1} `, value: false }];
            return {
                ...ques, options: temp
            }

        }
        )
        setQuestion(temp)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(question);
    }
    const handleOption = (e, optionIndex, questionIndex) => {
        const { name, value } = e.target;

        const temp = question.map((ques, index) => {
            if (questionIndex !== index) return { ...ques }
            return {
                ...ques, options: ques.options.map((option, i) => {
                    if (questionIndex !== i) return { ...option };
                    return { ...option, name: value }
                })
            }
        })

        setQuestion(temp)
    }
    const addForm = (e) => {
        e.preventDefault();
        const newArr = [...question, { title: "", options: [{ name: "option 1 ", value: false }, { name: " option 2", value: false }] }];
        setQuestion(newArr);
    }


    return (
        <div>
            <form action="">
                {question.map((ques, index) => {
                    return <>
                        <input type="text" value={ques.title} onChange={handleQues}></input>
                        {
                            ques.options.map((option, i) => {

                                return <input value={option.name} type="text" name="option" onChange={(e) => handleOption(e, i, index)}></input>
                            })
                        }
                        <input onClick={(e) => addOption(e, index)} placeholder=" add option " type="text" name="option" ></input>

                        <button type="submit" onClick={handleSubmit}>send</button>
                        <button type="submit" onClick={addForm}>add form</button>
                    </>
                })}


            </form>

        </div>
    )
}

export default Newagain