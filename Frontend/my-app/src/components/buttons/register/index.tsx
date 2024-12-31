import React from 'react';
import Link from 'next/link';

const RegisterButton = () => {
    return (
        <Link className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md shadow hover:bg-blue-500 transition-all"
        href="/register">
    
                Register
            
        </Link>
    );
};

export default RegisterButton;