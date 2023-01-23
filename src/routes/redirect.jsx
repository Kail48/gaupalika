import React from 'react'
import {useParams} from "react-router-dom";
import { Navigate, useRouteError } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LoadingOverlay} from '@mantine/core';
import axios from 'axios';
export default function Redirect() {
    //prevents loading the homepage without correct url
        const [error1, setError1] = useState('');
        const [loading, setloading] = useState(true);
        const [hasError, setHasError] = useState(false);
        const {name,id}=useParams();
        let navigate = useNavigate();
    const fetchData = (name,id) => {
        axios
              .get('http://188.34.189.124/api/'+name+'/'+id)
              .then((res) => {
              
               console.log(res.data);
               navigate('/homepage',{ state: res.data })
              })
              .catch((err) => {
                console.log("api problrm")
                  setError1(err);
                  setHasError(true);
                 
              })
              .finally(() => {
                  setloading(false);
      
              });
      
      };
      useEffect(() => {
    
      fetchData(name,id);
      }, []);
  return hasError?(
    <div>
        <article class="message is-info mt-5">
            <div class="message-header">
                <p>There was a Problem!</p>
                
            </div>
            <div class="message-body">
                The URL You entered does not Work.<br/>
                Please Enter the correct URL.
            </div>
        </article>
    </div>
  ): <div> <LoadingOverlay visible={loading} overlayBlur={2} /></div>
}
