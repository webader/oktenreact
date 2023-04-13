import {users} from "../../App";
import User from "../user/User";

function Users(props) {
  //console.log(props.xxx);
  let users = props.xxx;
  return (
    <div>
      {
        users.map((value, index) => (<User item={value}  key={index}/>))
      }
    </div>
  );
}

export default Users;