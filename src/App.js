import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/NavbarMenu/Menu';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {  

  return (
    <div className="mainSocialNetwork">
      <Header />
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/profile/*" element={
          <ProfileContainer/>} 
          />
          <Route path="/messages/*" element={
          <MessagesContainer />}
          />
           <Route path="/users" element={
           <UsersContainer/> }
           />
        </Routes>
      </div>
    </div>
  );
}

export default App;
