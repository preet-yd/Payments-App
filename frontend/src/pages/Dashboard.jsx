import React from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const balance = 0;
function Dashboard() {
//     const authToken = localStorage.getItem('auth');
//     console.log(authToken);

//      const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       });

//       const balance = response.data;
      
//     } catch (error) {
//         console.error('Error fetching balance:', error);      
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [authToken]);

    return (
        <>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </>
    )
}

export default Dashboard