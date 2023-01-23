import React from 'react'
import '../../Css/HomePage/homepage.css';
import logo from '../../Assets/LoginPage/image/logo.png';
import { Avatar,Title } from '@mantine/core';
export default function StaffCard(props) {
    
  return (
    <div className='staff-card-wrapper'>
        <div className='image-container'>
            <Avatar radius="xs" size="xl" src={props.data.image}/>
            
        </div>
        <div className='detail-container'>
            <p>{'नाम: '+props.data.name}</p>
            <p>{'Designation: '+props.data.designation}</p>
            <p>{'फोन नं: '+props.data.phone_number}</p>
            <p>{'कोठा नं.: '+props.data.room_no}</p>
           </div>
    </div>
  )
}
