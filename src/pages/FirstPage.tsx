import React from 'react';
import logo from './../logo.svg';
import './FirstPage.css';

function FirstPage() {
    return (
        <div className="FirstPage">
            <header className="FirstPage-header">
                <img src={logo} className="FirstPage-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="FirstPage-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default FirstPage;
