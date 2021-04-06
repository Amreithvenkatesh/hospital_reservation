import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Slot.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Slot() {
    const [name,setName]= useState('');
    const [date,setDate] = useState(null);
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const Register = {name,date};
        setIsPending(true);

        fetch('http://localhost:8000/vendor/register/',{
            method:'POST',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(Register)
        }).then(res=>{
            console.log(res.status);
            setIsPending(false);
        });
        history.push('/');
    }


    return (
        <div className="slot">
            <div className="slot__header">
                <div className="slot__header__left">
                    <h1>Slot Booking </h1>
                    <p>Set the slot which is comfortable for you. First come first serve basis</p>
                </div>
                <div className="slot__header__right">
                    <Avatar/> <h4>Patient Name</h4>
                </div>
            </div>
            <div className="slot__body">
                <form onSubmit={handleSubmit}>
                <div className="Slot__right__input">
                <input placeholder="Patient Name:"
                 type="text"
                 required
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                />
                </div>
                <div className="Slot__right__input">
                <DatePicker
                className="datepicker"
                placeholderText="Choose date:"
                selected={date}
                onChange = {date => setDate(date)}
                dateFormat = 'dd/MM/yyyy'
                minDate = {new Date()}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown/>
                </div>
                <div className="Slot__right__input">
                <select>
                <option value="Slot-1">10:00 - 10:30</option>
                <option value="Slot-2">10:30 - 11:00</option>
                <option value="Slot-3">11:30 - 12:00</option>
                <option value="Slot-4">12:00 - 12:30</option>
                <option value="Slot-5">12:30 - 1:00</option>
                <option value="Slot-6">2:00 - 2:30</option>
                <option value="Slot-7">2:30 - 3:00</option>
                </select>
                </div>
                {!isPending && <Button type="submit">Book Slot</Button>}
                {isPending && <Button disabled>Booking..</Button>}
            </form>
            </div>
        </div>
    )
}

export default Slot
