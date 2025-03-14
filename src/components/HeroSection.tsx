'use client';

import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" style={{ position: 'relative', width: '100%', height: '90vh' }}>
      <Image
        src="/24AW4_2048x.webp"
        alt="Salvage Public"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="hero-text" style={{ position: 'absolute', bottom: '20%', width: '100%', textAlign: 'center', color: 'white', fontSize: '48px', fontWeight: 'bold' }}>
        Welcome to Salvage Public
      </div>
    </div>
  );
}

export default HeroSection;
