import 'bulma/css/bulma.min.css';
import logo from "../Assets/LoginPage/image/logo.png";
import "../Css/header.css";
import { useState, useEffect } from 'react';
import {isMobile,BrowserView, MobileView} from 'react-device-detect';
import Clock from './clock';
import getNepaliDates from '../Services/nepaliDate';
import NepaliClock from './nepaliClock';
import getLocation from '../Services/location';
import Temperature from './temperature';
import React from 'react'


export default function Header(props) {
    const data=props.titleData;
    let nepaliDate=getNepaliDates();
    const [temperature, setTemerature] = useState(null);
    const [temperatureAvailable, setTemeratureAvailable] = useState(false);
    getLocation()
    let latitude=null;
    let longitude=null;
    if( localStorage.hasOwnProperty('latitude')){
        latitude=localStorage.getItem('latitude');
        longitude=localStorage.getItem('longitude');
    }

   
return (
        <div class="header has-background-link">
        <div class="columns is-mobile">
            <div class="column is-3">
                <div class="date-container">
                    <p class="has-text-white"><Clock /></p>
                    <p class="has-text-white">{nepaliDate.nepaliYear+'-'+nepaliDate.nepaliMonth+'-'+nepaliDate.nepaliDate1+' गते'}</p>
                    <BrowserView>
                        <p class="has-text-white">{nepaliDate.nepaliDayInWord+", "+nepaliDate.nepaliMeridian}<NepaliClock /></p>
                    </BrowserView> 
                    <MobileView>
                    <p class="has-text-white">{nepaliDate.nepaliDayInWord+", "+nepaliDate.nepaliMeridian}</p>  
                    <p class="has-text-white"><NepaliClock /></p> 
                    </MobileView>            
                </div>
            </div>
            <div class="column p-0 m-0">
            
            <div class="center-content has-text-white has-text-centered">
                    
                    <img src={logo} alt="Logo" className='logo'/>
                    
                    <div class="column header-title-wrapper">
                        <h2 class="header-title has-text-white ">{data.main_office_name}</h2>
                        <h4 class="header-sub-title has-text-white">{data.address}</h4>
                        <h4 class="header-sub-title has-text-white">{data.phone_number.join('/')}</h4>
                    </div>
                </div>
            
           
                
            </div>
            <div class="column is-3">
                <div class="temperature-container">
                <Temperature latitude={latitude} longitude={longitude}/>
                </div>
            </div>
        </div>
    </div>
    );
    
  };