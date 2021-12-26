import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
                    <div className="headerMargin">

                        <a href="https://itisravi.com/hym" className="navbar-brand">
                            <img src="https://firebasestorage.googleapis.com/v0/b/waego1.appspot.com/o/hym_logo_38px.svg?alt=media&token=bd2784f9-ebb5-4537-9aa5-62e1d98ae4ce">
                            </img>&nbsp;hityourmacros
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}
