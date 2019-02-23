import axios from 'axios';
import {FETCH_USER } from './types';
export const fetchUser = ()=>async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
};
export const handlePayment =(token)=>async dispatch =>{
    const res = await axios.post("/billing/stripe",token);
    dispatch({type:FETCH_USER,payload:res.data});
}
export const submitSurvey = (values,history)=>async dispatch=>{
    const res = await axios.post('/api/survey',values);
    history.push('/home');
    dispatch({type:FETCH_USER,payload:res.data});
}