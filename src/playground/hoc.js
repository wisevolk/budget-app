import React from "react";
import ReacDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : { props.info }</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is the private info. Please don't share!</p> }
            <WrappedComponent { ...props }/>
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ?
                <WrappedComponent { ...props } />:
                <p>Please Login to view the infos</p>
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

// ReacDOM.render(<AdminInfo isAdmin={false} info={"There are the details"}/>, document.getElementById("app"));
ReacDOM.render(<AuthInfo isAuthenticated={ false } info={ "There are the details" }/>, document.getElementById("app"));
