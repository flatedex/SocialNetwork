import  './Header.css';
import { NavLink } from 'react-router-dom';

const Header=(props) => {
    return (
      <div className="header borderRadius textFamily">
        <article>Котики делают нас лучше</article>
        <div className='auth'>
          {props.isAuth ? <NavLink to={'/auth'}>  Sign Up
          </NavLink>: console.log(props.login) 
          }
     

        </div>
      </div>
    );
}

export default Header;