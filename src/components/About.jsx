import aboutimage from '../assets/about.webp';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b border-gray-200 mt-20 px-4" id="about">
      
      <h2 className="text-2xl lg:text-4xl font-semibold tracking-wide text-center uppercase mb-16">
        About Us
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-24">
        
        {/* TEXT */}
        <div className="lg:w-1/2">
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            At <span className="text-black font-medium">VastuSpaze</span>, we believe in transforming houses into dream homes. With a passion for design and a strong commitment to quality, our skilled professionals have been delivering exceptional renovation services for over a decade.
          </p>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            We specialize in creating beautiful, functional spaces that reflect our clients’ unique tastes and lifestyles — from modern kitchens and luxurious bathrooms to serene outdoor living areas and cozy home offices.
          </p>

          <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
            Our mission is simple: to enhance the beauty and functionality of your home, making it a space where you can truly thrive.
          </p>
        </div>

        {/* IMAGE */}
        <div className="lg:w-1/2">
          <img
            src={aboutimage}
            alt="About VastuSpaze"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
