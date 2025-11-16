import React, { useEffect, useState } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }
    },[])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            className='fixed bottom-5 right-5 sm:top-5 sm:bottom-auto p-1 sm:p-2 rounded-full border-2 border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer'
        >
            {isDarkMode 
                ? <MdSunny className='h-6 w-6 text-yellow-300 hover:text-amber-500'/> 
                : <FaMoon className='h-6 w-6 text-blue-900 hover:text-amber-100'/>}
        </button>
    );
}
