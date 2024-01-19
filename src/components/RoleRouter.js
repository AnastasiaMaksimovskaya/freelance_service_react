import {user} from "../App";

const RoleRoute = ({roles = [], component, ...props }) => {
    if (user && (!roles.length || roles.includes(user.role))) {
        return component
    }
};

export default RoleRoute;