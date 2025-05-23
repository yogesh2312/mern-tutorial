import axios from 'axios';

const API_URL=`${import.meta.env.VITE_API_URL}/api/users/`;

const register = async (userData)=>{
  const response= await axios.post(API_URL,userData)

  if(response.data){
    localStorage.setItem('user',JSON.stringify(response.data));
  }

  return response.data;
}
const login = async (userData)=>{
    const response= await axios.post(API_URL+'login',userData)
  
    if(response.data){
      localStorage.setItem('user',JSON.stringify(response.data));
    }
  
    return response.data;
  }
const logout = async ()=>{
      localStorage.removeItem('user');
  }

export const authService ={
    register,
    logout,
    login
}