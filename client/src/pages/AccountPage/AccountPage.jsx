import React, { Component } from 'react'

export default class AccountPage extends Component {
    render() {
        return (
            <div className="account-page">
                <nav className="account-page__nav">
                    <ul className="account-page__list">
                        <li className="account-page__item">Account Details</li>
                        <li className="account-page__item">Preference Details</li>
                    </ul>
                </nav>
                
            </div>
        )
    }
}
