import React from 'react';

const Loading = ({ isLoading, children}) => {
    if (isLoading) {
        return (<div className="spinner-border m-2" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
    }
    return children
};

export default Loading;
