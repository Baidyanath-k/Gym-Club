import React from 'react';
import './Toasts.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Toasts = () => {
    const notify = () => toast("Your Activiti Complete");
    return (
        <div className='main-toasts'>
            <button onClick={notify}>Activity Complete</button>
            <ToastContainer />
        </div>
    );
};

export default Toasts;