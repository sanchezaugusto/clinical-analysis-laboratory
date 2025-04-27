import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
    return (
        <Link
            href="/login"
            aria-label="Ir a la página de login"
            className="px-6 py-3 text-lg md:text-xl font-medium text-white bg-blue-700 rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
            Login
        </Link>
    );
};

export default LoginButton;
