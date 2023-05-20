//так писали раніше на класових компонентах
import {Component} from "react";
import {userService} from "../services/user.service";
import {User} from "./User";

class Users extends Component {
    //обовязково має бути конструктор який передає props
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            a: 5
        }
        console.log('constructor')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        userService.getAll().then(value => value.data).then(value => this.setState({users: value}));
        console.log('componentDidMount');
    }

    //щоб нам відрендерити якусь інформацію нам треба переопределіти метод render
    render() {
        console.log('render');
        return (
            <div>
                {this.state.users.map(user=><User key={user.id} user={user}/>)}
                {/*<div>{this.state.a}</div>*/}
                {/*<div>{JSON.stringify(this.state.users)}</div>*/}
            </div>
        )
    }
}

export {Users}