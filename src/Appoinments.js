import { Avatar } from '@material-ui/core';
import React from 'react'
import './Appoinments.css';
import { Link } from 'react-router-dom';




function Appoinments() {

    return (
        <div className="appoinments">
            <div className="appoinments__header">
                <h2>Your Appoinments for the day</h2>
                <Link to="/"><Avatar /></Link>
            </div>
            <div className="appoinments__body">
            <table>
                <tr>
                    <th>Patient-Name</th>
                    <th>Patient-Id</th>
                    <th>Phone_number</th>
                    <th>Date</th>
                    <th>Slot</th>
                    <th>Time</th>
                    <th>Status</th>
                </tr>
                <tr>
                            <td>Ashwin</td>
                            <td>A0PP2W</td>
                            <td>88555445412</td>
                            <td>21/02/2021</td>
                            <td>1</td>
                            <td>10:00 - 10:30</td>
                            <td>Approved</td>
                </tr>
                <tr>
                            <td>Ashwin</td>
                            <td>A0PP2W</td>
                            <td>88555445412</td>
                            <td>21/02/2021</td>
                            <td>1</td>
                            <td>10:00 - 10:30</td>
                            <td>Approved</td>
                </tr>
                <tr>
                            <td>Ashwin</td>
                            <td>A0PP2W</td>
                            <td>88555445412</td>
                            <td>21/02/2021</td>
                            <td>1</td>
                            <td>10:00 - 10:30</td>
                            <td>Approved</td>
                </tr>
                <tr>
                            <td>Ashwin</td>
                            <td>A0PP2W</td>
                            <td>88555445412</td>
                            <td>21/02/2021</td>
                            <td>1</td>
                            <td>10:00 - 10:30</td>
                            <td>Approved</td>
                </tr>
            </table>
            </div>
        </div>
    )
}

export default Appoinments
