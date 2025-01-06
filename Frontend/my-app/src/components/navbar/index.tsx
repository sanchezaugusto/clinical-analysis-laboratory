import React from "react";
import Link from "next/link";


const navItems = [
    {label: 'Programas especiales', route:'/programas'},
    {label: 'Farmacias', route:'/farmacias'},
    {label: 'Laboratorio', route:'/laboratorio'},
    {label: 'Derivaciones', route:'/derivaciones'},
    {label: 'Obras Sociales', route:'/obras_sociales'},
    {label: 'Delegaciones', route:'/delegaciones'}
];

export default function navbar(){
    return(
        <nav className="flex justify-center items-center w-full h-14 bg-gray-100 px-4 sticky top-0 z-10">
            <div className="flex gap-8 text-2xl">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.route}
                    className="text-stone-800 hover:text-blue-400 hover:underline"
                >
                    {item.label}
                </Link>
            ))}
             
            </div>
            
        </nav>

    );



}