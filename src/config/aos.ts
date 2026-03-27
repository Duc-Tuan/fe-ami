'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            offset: 100,
            delay: 0,
            easing: 'ease-out-cubic',
        });
    }, []);

    return null;
};

export default AOSInit;