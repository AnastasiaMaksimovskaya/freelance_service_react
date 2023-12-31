import {Route, Routes} from "react-router-dom";
import {user} from "../App";

const RoleRoute = ({roles = [], component, ...props }) => {
    if (!roles.length || roles.includes(user.role)) {
        return component
    }
};

export default RoleRoute;