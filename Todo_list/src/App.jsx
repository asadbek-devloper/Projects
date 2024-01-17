// import { useState } from "react";
// import Card from "./componets/helper/Card/Card";
// import AddTodo from "./componets/UI/AddTodo/AddTodo";
// import TodoList from "./componets/UI/TodoList/TodoList";
// import AppContext from "./context/appContext";
// import Layout from "./componets/helper/Layout/Layout";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [isVerify, setIsVerify] = useState(false);
//   const [username, setUsername] = useState("");

//   const logOut = () => {
//     setIsVerify(false);
//   };
//   const loginData = ({ username, password }) => {
//     if (!username.trim() || !password.trim()) {
//       setIsVerify(false);
//       setUsername("");
//       return;
//     } else {
//       setIsVerify(true);
//       setUsername(username);
//     }
//   };

//   const deleteHandler = (u) => {
//     setUsers((prevArr) => prevArr.filter((k) => u?.id !== k?.id));
//   };

//   return (
//     <AppContext.Provider value={{ username, isVerify }}>
//       <Layout logOut={logOut}>
//         <Card>
//           <h1>Users List</h1>
//         </Card>
//         {!isVerify && <Login loginData={loginData} />}
//         {isVerify && (
//           <>
//             <AddTodo setUsers={setUsers} />
//             <TodoList users={users} setUsers={setUsers} />
//           </>
//         )}
//       </Layout>
//     </AppContext.Provider>
//   );
// }
// export default App;

import { useState } from "react";

import Layout from "./componets/helper/Layout/Layout";
import Card from "./componets/helper/Card/Card";
import AddTodo from "./componets/UI/AddTodo/AddTodoA";
import TodoList from "./componets/UI/TodoList/TodoList";
import Login from "./componets/UI/Login/Login";
import AppContext from "./context/appContext";

function App() {
  const [users, setUsers] = useState([]);
  const [isVerify, setIsVerify] = useState(false);
  const [username, setUsername] = useState("");
  const logOut = () => {
    setIsVerify(false);
  };
  const loginData = ({ username, password }) => {
    if (!username.trim() || !password.trim()) {
      setIsVerify(false);
      setUsername("");
      return;
    } else {
      setIsVerify(true);
      setUsername(username);
    }
  };
  return (
    <AppContext.Provider value={{ username, isVerify }}>
      <Layout logOut={logOut}>
        <Card>
          <h1>Users List</h1>
        </Card>
        {!isVerify && <Login loginData={loginData} />}
        {isVerify && (
          <>
            <AddTodo setUsers={setUsers} />
            <TodoList users={users} setUsers={setUsers} />
          </>
        )}
      </Layout>
    </AppContext.Provider>
  );
}
export default App;
