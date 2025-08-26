import React, { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} | Gadgetsy `;
    },[title]);

    
};

export default usePageTitle;