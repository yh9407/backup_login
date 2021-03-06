import React from 'react';
import {Authentication, Header} from '../components';
import {connect} from 'react-redux';
import {registerRequest} from '../actions/auth';
import * as Materialize from "materialize-css";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(email, nickname, password) {
        return this.props.registerRequest(email, nickname, password).then(
            () => {
                if (this.props.status === "SUCCESS") {
                    this.props.history.push('/login');
                    return true;
                } else {
    console.log('errorcode: ' + this.props.errorCode)
                     let errorMessage = [
                         '이미 계정이 존재함',
                         '이메일형식에 맞지 않음',
                         '이미 닉네임이 존재함',
                         '비밀번호는 영문,숫자 포함 10자리 이상',
                     ];

                    return false;
                }
            }
        );
    }

    render() {
        return (

            <div>
                <Authentication mode={false} onRegister={this.handleRegister} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.register.status,
        errorCode: state.authentication.register.error
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        registerRequest: (email, nickname, password) => {
            return dispatch(registerRequest(email, nickname, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
