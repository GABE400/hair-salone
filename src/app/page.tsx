import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Navigation from "@/components/Navigation";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  const menuId = "menu-toggle";
  const navigationLinks = [
    { href: "./index.html", label: "Home" },
    { href: "#", label: "Services" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Contact" },
  ];

  return (
    <div>
      <Header logoSrc='/assets/Artboard 1.png' title='Hair Day Salon' />
      <Navigation menuId={menuId} links={navigationLinks} />
      <main className='p-20 flex flex-wrap justify-between bg-black h-full md:h-screen'>
        <Hero />
        <MainContent />
        <Footer />
      </main>
    </div>
  );
}
