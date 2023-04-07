import React, { useState } from "react";
import meme from "./images/meme.jpg";
import { base64Photo } from './Constant';
import Delete from "./Deleteicon";
import './styles.module.css'
// import styled from "styled-components";
import stylee from "./bai1.module.css";

import styles from "./App.module.css";

// function App() {
//   // return (
//   //   <div className="container">
//   //     <div>Đây là hướng dẫn sử dụng ảnh trong React</div>
//   //     <img src={meme} width="200" height="100" className="img" alt="Meme" />
//   //     <div className="require-title">Day la anh dung require</div>
//   //     <img src={require('./images/meme.jpg')} className="img2"/>
//   //     <div className="require-title">Day la anh dung link online</div>
//   //     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VTfyJC1TR_CSoCs22ivd2eT5ZI3U7Qt8tw&usqp=CAU'
//   //     className="img3"/>
//   //     <div className='require-title'>Đây là ảnh dùng base64</div>
//   //     <img src={base64Photo} className='img3' />
//   //     <Delete />
//   //   </div>
//   // );

// //   const [numClicked, setNumClicked] = useState(0)
// //   const handleClick = () => {
// //     setNumClicked((current) =>{
// //       return current = current +1
// //     })
// //   }
// //   const StyledText = styled.h2`
// //   color: ${(props) => {
// //     if (props.numClicked % 2 === 0) {
// //       return "blue";
// //     }
// //     return "red";
// //   }};
// // `; 
// // return (
// //   <div className="App">
// //     <button onClick={handleClick}>Click here</button>
// //     <StyledText numClicked={numClicked}>
// //       You clicked {numClicked} times
// //     </StyledText>
// //   </div>
// // );

// <div className="container">
//   <h1>login</h1>
//   <form>
//     <p>Nhap email:</p>
//     <input
//       name = "email"
//       type = "text"
//      />
//      <br />
//         <label>
//           <input
//             name="isRead"
//             type="checkbox" />I read and accept the privacy policy:
//         </label>

//         <p>bấm submit form</p>
//         <button>submit nè</button>
//       </form>

// </div>


// }

// export default App;

// export default function App() {

//   return (
//     <div className="p-4">
//       <h1 className="text-blue-500 font-bold text-4xl">Login</h1>
//       <form>
//         <p className="mt-8">Nhập email:</p>
//         <input
//           className="border rounded border-blue-600 h-9 w-full mt-2"
//           name="email"
//           type="text"
//         />
//         <p className="mt-4">Nhập password:</p>
//         <input
//           className="border rounded border-blue-600 h-9 w-full mt-2"
//           name="password"
//           type="password"
//         />
//         <br />
//         <label>
//           <input
//             className="mt-4"
//             name="isRead"
//             type="checkbox" /> I read and accept the privacy policy
//         </label>
//         <br />
//         <button className="mt-8 h-9 border rounded w-40 bg-blue-400 text-white font-bold">
//           Submit nè
//         </button>
//       </form>
//     </div>
//   );
// }

function App() {
  return (
    <div className={stylee.container}>
      <div className={stylee.sidebar}>Sidebar</div>
      <div className={stylee.content}>Content</div>
    </div>
  );
}

export default App;


// function App() {
//   const [time, setTime] = useState('day');

//   const handleNightClick = () => {
//     setTime('night');
//   }

//   const handleDayClick = () => {
//     setTime('day');
//   }

//   return (
//     <div>
//       <button className="button-group" onClick={handleNightClick}>Night</button>
//       <button style={{marginRight:20}} onClick={handleDayClick}>Day</button>
//       <div style={{ width: 200, height: 80, backgroundColor: time === 'day' ? 'blue' : 'black' }}></div>
//     </div>
//   );
// }

// export default App;









    
  
