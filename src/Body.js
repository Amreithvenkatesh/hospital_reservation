import React from 'react'
import './Body.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


function Body() {
    // const [medicine,setMedicine]= useState('');
    // const [isPending,setIsPending] = useState(false);
    // const history = useHistory();


    // const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     const medicine = {medicine};
    //     console.log(medicine)
    //     setIsPending(true);

    //     fetch('http://localhost:8000/vendor/register/',{
    //         method:'POST',
    //         headers: { "Content-Type":"application/json"},
    //         body: JSON.stringify(medicine)
    //     }).then(res=>{
    //         setIsPending(false);
    //         history.push('/');
    //     });
        
    // }
    return (
        <div className="body">
            <div className="body__about">
                <div className="body__about__left">
                <h1>For Patients: Book Appoinments at ease</h1>
                <h3>Login to your account and book appoinments at available slots. 
                    We always try to make bookings easy and make things simple for you!</h3>
                </div>
                <div className="body__about__right">
                <Button className="navbar__btn__signIn"><Link to="/signIn">Sign In (Patients)</Link></Button>
                <Button className="navbar__btn__register"><Link to="/register">Register (Patients)</Link></Button>
                </div>    
            </div>
            <div className="body__hospital">
                <div className="body__about__right">
                <Button className="navbar__btn__signIn"><Link to="/signInHospital">Sign In (Hospital)</Link></Button>
                <Button className="navbar__btn__register"><Link to="/registerHospital">Register (Hospital)</Link></Button>
                </div> 
                <div className="body__about__left">
                <h1>For Hospital: Review Appoinments</h1>
                <h3>Made for hospital staffs, to see all the appoinments for the day and 
                    get to know about their patients
                </h3>
                </div>   
            </div>
            <div className="body__howTo">
                <div className="body__howTo__left">
                    <h1>How our website work?</h1>
                    <hr/>
                    <div className="body__howTo__left__1">
                        <LocationOnIcon />  
                        <h1>For Patients: Register your account and book available slots</h1>
                        
                    </div>
                    <ArrowDownwardIcon />
                    <div className="body__howTo__left__1">
                    <LocalHospitalIcon />
                        <h1>For Hospital: See all bookings for a day </h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body
