// components/Header.tsx
import Image from "next/image";

interface HeaderProps {
  logoSrc: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <header className='text-center py-10'>
      <Image
        src={logoSrc}
        alt='Hair Day Logo'
        width={150}
        height={150}
        className='max-w-full h-20 mx-auto'
      />
      <h1 className='text-white'>{title}</h1>
    </header>
  );
};

export default Header;
