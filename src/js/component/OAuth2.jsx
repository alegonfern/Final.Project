import React, { Fragment, useEffect, useState } from "react";
import SignIn from "./SignIn/SignIn";
import LoggedIn from "./LoggedIn";
import { Routes, Route } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router";
import "../../styles/Oauth.css"


export const BACKEND_URL = "http://localhost:5000";

function OAuth2() {
    const nav = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        Axios.get(`${BACKEND_URL}/auth/google`, {
            headers: {
                "Access-Control-Allow-Origin": "* ",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        })
            .then((res) => {
                window.location.assign(res.data.auth_url);
            })
            .catch((err) => console.log(err));
        console.log(BACKEND_URL);
    };

    useEffect(() => {
        if (localStorage.getItem('JWT') == null) {
            const query = new URLSearchParams(window.location.search);
            const token = query.get('jwt')
            if (token) {
                localStorage.setItem('JWT', token);
                return nav('/home')
            }
        }
    })

    return (
        <Routes>
            <Route
                exact
                path="/oauth"
                element={<SignIn login={handleClick}></SignIn>}
            />
            <Route exact path="/home" element={<LoggedIn></LoggedIn>} />
        </Routes>
    );
}

export default OAuth2;