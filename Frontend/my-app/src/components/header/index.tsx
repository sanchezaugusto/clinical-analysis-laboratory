import React from "react";
import Navbar from "../navbar";
import Link from "next/link";
import LoginButton from "../buttons/login";
import RegisterButton from "../buttons/register";

const headerItems = [
    {label: '3795-058041', route:'https://wa.me/543795058041'},
    {label: 'TURNOS', route:'/turnos'},
    {label: 'CONTACTO', route:'/contacto'},
    {label: 'RESULTADOS', route:'/resultado'},
    {label: 'AFILIACIONES', route:'/afiliaciones'}
];

export default function Header() {
    return (
        <header className="bg-white">
            <div className="flex justify-between items-center w-full h-14 px-4">
              
                <div className="text-3xl font-bold">
                    <a href="/">Logo</a>
                </div>

                <div className="flex gap-8 text-3xl">
                    {headerItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.route}
                            className="px-4 py-2 font-medium text-stone-800 hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex gap-4">
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>

         
            <Navbar />
        </header>
    );
}
