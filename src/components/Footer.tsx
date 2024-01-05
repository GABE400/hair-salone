import Image from "next/image";
import Logo from "@/assets/Artboard 22.png";

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-around items-center text-white text-center py-6 md:py-10 w-full'>
      {/* Footer Column with Logo */}
      <div className='footer-column mb-4 md:mb-0'>
        <Image src={Logo} alt='Client Logo' className='logo-small w-36' />
      </div>

      {/* Footer Column with Copyright Text and "Developed by Techado" */}
      <div className='footer-column'>
        <div>&copy; 2024 Hair Day Salon. All rights reserved.</div>
        <div className='mt-2 md:mt-0'>Developed by Techado</div>
      </div>
    </footer>
  );
};

export default Footer;
