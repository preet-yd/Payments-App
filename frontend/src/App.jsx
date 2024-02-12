import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import axios from 'axios';

function App() {
  // const navigate = useNavigate();
  // const token = localStorage.getItem('token');
  // console.log(token);
  // async function tokenValid(){
  //   const response = await axios.get('http://localhost:3000/api/v1/user/verify', {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     }
  //   })
  //   if(response.data.status === 200){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // if (token) {
  //   navigate('/dashboard');
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {tokenValid ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            <Route path="/" element={<SignUp/>} />
          )} */}
          <Route path="/" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// function App() {
//   return (
//     <>
//        <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/send" element={<SendMoney />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;