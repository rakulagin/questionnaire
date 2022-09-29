import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import DataContext from "./context";

import './index.scss';
import App from './App';

function Main() {
    const [userInfo, setUserInfo] = useState(
        {
            user: {
                name: "",
                gender: "",
                year: "",
                relationship: "",
                city: "",
                height: "",
                weight: "",
                education: ""
            },
            answers: []
        }
    )

    return (
        <DataContext.Provider value={{userInfo, setUserInfo}}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DataContext.Provider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);
