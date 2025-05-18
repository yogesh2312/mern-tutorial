import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';
import {toast} from  'react-toastify';

function Dashboard() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
     const {user}=useSelector(state=>state.auth);
    const {goals,isLoading,isError ,message}=useSelector((state)=> state.goal)
     
         useEffect(()=>{
             if(isError){
                 toast.error(message);
             }
             dispatch(getGoals());
             return ()=>{
                dispatch(reset())
             }

         },[user,navigate]);
         
       
     useEffect(()=>{
        if(!user){
            navigate('/login');
        }
     })
     
     if (isLoading) {
        return <Spinner />
      }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm/> 
      <section className='content'> 
        {goals.length > 0 ? (
            <div className='goals'>
                {goals.map((goal)=>(
                    <GoalItem key={goal._id} goal={goal}/>
                ))}
            </div>
        )
        :(<h3>You have no goals</h3>)}
      </section>
    </>
  )
}

export default Dashboard
