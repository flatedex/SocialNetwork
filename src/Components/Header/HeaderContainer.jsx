import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData} from '../../redux/authReducer'
import { authAPI } from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount(){
      
       authAPI.getAuthMe().then((data) => {
        if(data.resultCode===0){
            let {id,email,login}=data.data;
            this.props.setAuthUserData(id, email, login);
        }
      });
    }

    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect (mapStateToProps,{setAuthUserData}) (HeaderContainer);