import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Form from "./Form"
import Question from "./Question";

import New from "./Newagain"

import { createContext, useState } from 'react';
import Answer from "./Answer";

export const MyContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,

  },
  {
    path: "question",
    element: <Question />,

  },
  {
    path: "answer",
    element: <Answer />,
  },
  {
    path: "new",
    element: <New />,
  }


])



function App() {

  const [value, setValue] = useState([]);

  const [final, setFinal] = useState([]);

  const [answer, setAnswer] = useState([]);


  return (
    <div className="App">
      {/* <Provider store={store} > */}
      <MyContext.Provider value={{ value, setValue, final, setFinal, answer, setAnswer }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
      {/* </Provider> */}
    </div>
  );
}

export default App;
