"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import './heroAssetCSS.css';
import mercuryOffice from '../../../public/assets/images/office/mercury-office-official.png';

const HeroAssetShowcase: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <motion.div
                ref={ref}
                className="heroAssetContainer m-auto w-full max-parent-grid-container-width"
            >
                {/* Use the next/image component for images */}
                <Image
                    src={mercuryOffice}
                    alt="Mercury Office"
                />
                <div className='centered'>
                    <h1 className='text-h3 mb-4'>Built Locally, Connected Globally</h1>
                    <p className='text-paragraph'>Founded in the UAE, Mercury is a multifaceted payments ecosystem enabler fostering growth & digitalization. We are a technology-driven, solution-oriented team with decades of experience in the payments domain. We are on a mission to democratize financial services, level the playing field and drive cashless ecosystems.</p>
                </div>
            </motion.div>
        </>
    );
};

export default HeroAssetShowcase;
