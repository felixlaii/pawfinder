import React from 'react'
import { Link } from 'react-router-dom'
import './pageHeader.scss'

function PageHeader() {
    return (
        <div className="page-header">
            <nav className="page-header__nav">
                <ul className="page-header__list">
                    <Link to='/'>
                        <li className="page-header__item">home</li>
                    </Link>
                    <Link to='/'>
                        <li className="page-header__item">gallery</li>
                    </Link>

                    <Link to='/'>
                        <li className="page-header__item">account</li>
                    </Link>

                    <Link to='/'>
                        <li className="page-header__item">sign in & sign up</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default PageHeader
