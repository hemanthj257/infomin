import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#/', current: true },
    { name: 'Internships', href: '#courses', current: false },
    { name: 'Projects', href: '#mentor', current: false },
    { name: 'About', href: '/', current: false },
    { name: 'Products', href: '#testimonial', current: false },
    { name: 'Contact Us', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        {/* Logo Section - Left */}
                        <div className="flex-shrink-0 w-[160px]">
                            <img
                                className="block h-12 w-40 lg:hidden"
                                src={'/assets/logo/logo.svg'}
                                alt="dsign-logo"
                            />
                            <img
                                className="hidden h-12 w-40 lg:block"
                                src={'/assets/logo/logo.svg'}
                                alt="dsign-logo"
                            />
                        </div>

                        {/* Navigation Links - Center */}
                        <div className="hidden lg:flex flex-1 justify-center items-center px-2 md:px-0">
                            <div className="flex items-center space-x-8">
                                {navigation.slice(0, -1).map((item) => ( // Exclude Contact Us from main navigation
                                    <CustomLink
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => handleLinkClick(item.href)}
                                    >
                                        <span
                                            className={classNames(
                                                item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                'px-2 py-2 text-base font-medium opacity-90 hover:opacity-100 transition-all'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </span>
                                    </CustomLink>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us Button - Right */}
                        <div className="hidden lg:flex flex-shrink-0 w-[160px] justify-end">
                            <CustomLink
                                href="#contact"
                                onClick={() => handleLinkClick('#contact')}
                            >
                                <span className="inline-flex items-center justify-center px-8 py-2 text-base font-medium text-white bg-Blueviolet rounded-full transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                                    Contact Us
                                </span>
                            </CustomLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <Bars3Icon 
                                className="block h-6 w-6" 
                                aria-hidden="true" 
                                onClick={() => setIsOpen(true)} 
                            />
                        </div>

                        {/* Drawer Component */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
