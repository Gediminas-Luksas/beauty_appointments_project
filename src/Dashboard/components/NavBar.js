import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faChartBar } from '@fortawesome/free-solid-svg-icons'

const DashboardNavBar = () => {
    return (
        <div className="side-nav">
        <nav>
            <ul>
                <li>
                    <a href="users.html">
                        <span className="i"><FontAwesomeIcon icon={faUser} /></span>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="i"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span>Messages</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <span className="i"><FontAwesomeIcon icon={faChartBar} /></span>
                        <span>Appointments</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    );
}

export default DashboardNavBar;