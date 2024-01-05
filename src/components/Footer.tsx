import Image from "next/image";
import Logo from "@/assets/Artboard 22.png";

const Footer = () => {
  return (
    <footer className='flex justify-around items-center bg-gray-800 text-white text-center py-10 w-full'>
      <div className='footer-column'>
        <Image src={Logo} alt='Client Logo' className='logo-small w-36' />
      </div>
      <div className='footer-column'>
        &copy; 2024 Hair Day Salon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
