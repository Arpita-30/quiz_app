import React from 'react'

const [question, setQuestion] = useState([{
    title: "",
    options: [{ name: "option 1", value: "false " }],
    isRequired: false,
    type: "radio"
}])

const handleQuestion = (e, i) => {
    const val = e.target.value;
    const temp = question.map((ques, index) => {
        if (index !== i) return { ...ques }
        return {
            ...question, title: val

        }
    })
    setQuestion(temp)
}

const addOption = (e) => {
    const temp = [...question.options, { name: '${options.length}', value: false }]
    setQuestion({ ...question, options: temp })
}

const handleOptions = (e, formIndex, optionIndex) => {
    const temp = question.map((ques, i) => {
        if (i !== formIndex) return { ...ques }
        return {
            ...ques, options: options.map((option, index) => {
                if (optionIndex !== index)
                    return { ...option, name: value }
            })
        }
    })
    setQuestion(temp);
}

const handleRequired = () => {

    setQuestion({ ...question, isRequired: !isRequired })
}

const deleteOption = (i) => {
    const temp = options.filter((option, index) => {
        return index !== i;
    }
    )
    setQuestion(temp);
}

const Newsecond = () => {
    return (
        <div>
            <form action="">
                <input type="text" name="title" id="" onChange={handleQuestion} value={question.title} />
                {options.map((option, index) => {
                    <div>
                        <input type={question.type}></input>
                        <input type="text" onClick={addOption} />
                        <button onClick={deleteOption}>delete op</button>
                        <button onClick={handleRequired}>required</button>
                    </div>
                })
                }
            </form>
        </div>
    )
}

export default Newsecond