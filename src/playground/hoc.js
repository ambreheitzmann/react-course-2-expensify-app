import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Hello</h1>
        <p>Hey you gorgeous !</p>
        <p>{props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info pls don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentificated ? (<WrappedComponent {...props} />)
        : <p>Please login</p>}
            
        </div>
    );
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="How are you ?" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificated={true} info="There are the details" />, document.getElementById('app'));
