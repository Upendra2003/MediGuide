import React from 'react';

const Footer = () => {
    return (
        <footer className="py-6 bg-neutral-800 px-52 fixed bottom-0 w-full">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-extrabold text-3xl text-white">MedSP</h1>
                    <ul className="flex items-center space-x-3">
                        {/* Your social media icons */}
                    </ul>
                </div>
                <hr className="mt-3 border-slate-700" />
                <ul className="mt-3 flex justify-around">
                    <li>
                        <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About</a>
                    </li>
                    <li>
                        <a href="#" title="" className="text-white hover:text-blue-600">Contact us</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">FAQ</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Support</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Privacy policy</a>
                    </li>
                    <li>
                        <a href="#" title="" className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Terms of use</a>
                    </li>
                </ul>
                <hr className="my-3 border-slate-700" />
                <p className="text-sm text-center text-gray-600">Copyright © MedSP | All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
