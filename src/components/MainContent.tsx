import React from "react";
import Image from "next/image";
import barberImg from "@/assets/obi-pixel8propix--sRVfY0f2d8-unsplash.jpg";
import hairImg from "@/assets/bave-pictures-e_BhzWhVlBs-unsplash.jpg";
import nailImg from "@/assets/pexels-cottonbro-studio-3997389.jpg";

const MainContent = () => {
  return (
    <div className='main-row three-columns flex flex-wrap justify-center px-0 md:px-6 lg:px-8 mx-auto'>
      <article className='column w-full md:w-80 mx-4 bg-black text-white text-center shadow-md hover:transform hover:translate-y-0 hover:opacity-90'>
        <Image
          src={barberImg}
          alt='Haircut Image'
          className='max-w-full h-auto rounded-md shadow-md mb-4'
        />
        <div className='word p-4 bg-black rounded-md shadow-md animate-text cursor-pointer'>
          <h3 className='text-white text-lg mb-2'>Haircuts Tailored to You</h3>
          <p className='text-gray-400 text-sm md:text-base'>
            Step into a realm of style with our latest cutting-edge haircuts,
            meticulously crafted to enhance your unique personality. Our skilled
            stylists bring precision and flair to every detail, ensuring a
            personalized and exceptional experience. From classic elegance to
            bold transformations, we are dedicated to creating the perfect look
            that resonates with your individuality and exceeds all expectations.
          </p>
        </div>
      </article>
      <article className='column w-full md:w-80 mx-4 bg-black text-white text-center shadow-md hover:transform hover:translate-y-0 hover:opacity-90'>
        <Image
          src={hairImg}
          alt='Haircut Image'
          className='max-w-full h-auto rounded-md shadow-md mb-4'
        />
        <div className='word p-4 bg-black rounded-md shadow-md animate-text cursor-pointer'>
          <h3 className='text-white text-lg mb-2'>Edgy Hair Colors</h3>
          <p className='text-gray-400 text-sm md:text-base'>
            Immerse yourself in a world of vibrant self-expression with our edgy
            hair colors that boldly make a statement. Our expert colorists blend
            creativity and precision to craft unique hues that reflect your
            personality. Whether it&apos;s a daring transformation or subtle
            highlights, our palette of colors ensures an individualized and
            impactful style that speaks volumes and sets you apart with
            confidence.
          </p>
        </div>
      </article>
      <article className='column w-full md:w-80 mx-4 bg-black text-white text-center shadow-md hover:transform hover:translate-y-0 hover:opacity-90'>
        <Image
          src={nailImg}
          alt='Haircut Image'
          className='max-w-full h-auto rounded-md shadow-md mb-4'
        />
        <div className='word p-4 bg-black rounded-md shadow-md animate-text cursor-pointer'>
          <h3 className='text-white text-lg mb-2'>Makeup and Nail Services</h3>
          <p className='text-gray-400 text-sm md:text-base'>
            Elevate your appearance with our comprehensive makeup and nail
            services, offering the epitome of transformation. Our skilled
            artists bring out your natural beauty through precise makeup
            techniques, and our manicurist adds the finishing touch with
            meticulous nail care. Experience the ultimate metamorphosis, where
            every detail contributes to a refined and polished look that
            perfectly complements your unique style and enhances your overall
            aesthetic allure.
          </p>
        </div>
      </article>
      {/* Repeat similar structure for other two articles */}
    </div>
  );
};

export default MainContent;
