import { Fragment, Component } from 'react';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

import Users from './Users';

// const DUMMY_USERS = [
//     { id: 'u1', name: 'Max' },
//     { id: 'u2', name: 'Manuel' },
//     { id: 'u3', name: 'Julie' },
//   ];


  /**
   * 168
   * with setting filtered users in component did mount, all the users are sent in on Load
   */

class UserFinder extends Component {
    //169 get the context here
    static contextType = UsersContext

    constructor() {
        super()
        this.state = {
            filteredUsers :[],
            searchTerm: ''
        }
    }

    componentDidMount() {
        //send http request
        this.setState({filteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                )
            })
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <UsersContext.Consumer>
              <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              <ErrorBoundary>
              <Users users={this.state.filteredUsers} />
              </ErrorBoundary>
              </UsersContext.Consumer>
            </Fragment>
          );
    }
}


// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <input type='search' onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;