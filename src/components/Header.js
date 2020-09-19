import React from 'react';
import {Link} from "react-router-dom";
import Authentication from "./Authentication";

class Header extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        open:false,
    }
}
open = () => {
    this.setState({open:true})
}

    render() {
        const loginButton = (
            <li>

                    {/*<a onClick={this.open}>*/}
                    {/*    버튼*/}
                    {/*</a>*/}
                    <Link to="/login" >로그인/회원가입</Link>


            </li>

        );

        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}>
                    로그아웃 아이콘
                </a>
            </li>
        );
        const open = (
            <>
            {/*{this.state.open ? <Authentication/> : null}*/}
            </>
            )
        return (



            <nav>
                {/*{console.log(this.props)}*/}
                {/*{console.log(this.state)}*/}
                <div>
                    {open}
                </div>
                <div>
                    <Link to="/">
                        Hug Us
                    </Link>
                </div>
                <div>
                    <ul>
                        {this.props.isLoggedIn ? logoutButton : loginButton}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;