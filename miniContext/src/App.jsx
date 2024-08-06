import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/UserContextProvider";


export default function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}