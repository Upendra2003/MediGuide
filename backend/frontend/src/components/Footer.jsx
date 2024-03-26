import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 bg-neutral-800 lg:px-52 bottom-0 w-full text-center">
            <div className="container mx-auto">
                <div className=" justify-between items-center text-center">
                    <h1 className="font-extrabold text-3xl text-white">MediGuide</h1>
                </div>
                <hr className="mt-3 border-slate-700" />
                <ul className="mt-3 flex justify-around flex-col lg:flex-row text-center">
                    <li>
                        <a href="/hiw" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
                    </li>
                    <li>
                        <a href="#" title="" className="text-white hover:text-blue-600">Contact us</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex justify-center items-center text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">FAQ</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex justify-center items-center text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Support</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex justify-center items-center text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Privacy policy</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex justify-center items-center text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Terms of use</a>
                    </li>
                </ul>
                <hr className="my-3 border-slate-700" />
                <p className="text-sm text-center text-gray-600">Copyright © MedSP | All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
