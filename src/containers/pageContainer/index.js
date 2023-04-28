import React from 'react';

const PageContainer = ({children}) => {
    return (
        <div className="w-10/12 m-auto bg-red-300">
            {children}
        </div>
    );
};

export default PageContainer;
