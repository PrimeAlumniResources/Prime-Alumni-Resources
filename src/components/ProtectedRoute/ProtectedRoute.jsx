import React from 'react';
import { Navigate } from "react-router-dom";

const Protected = ({ user, children }) => {
    if (!user.id) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;
