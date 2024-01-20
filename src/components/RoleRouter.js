import {userContext} from "./context/userContext";

const RoleRoute = ({roles = [], component}) => {
    return (
        <userContext.Consumer>
            {({user}) => {
                if (user && (!roles.length || roles.includes(user.role))) {
                    return component
                }
            }}
        </userContext.Consumer>
    )
};

export default RoleRoute;