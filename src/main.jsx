import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { CustomHookForm } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memories } from './06-memos/Memories'
import { Padre } from './07-tarea-memo/Padre'
import { MainApp } from './09-useContext/MainApp'
import { TodoApp } from './8-useReducer/TodoApp'

import { HooksApp } from './HooksApp'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";


import './index.css'

// import './8-useReducer/intro-reducer';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <CustomHookForm /> */}
    {/* <MultipleCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memories /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    {/* <TodoApp /> */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
)
