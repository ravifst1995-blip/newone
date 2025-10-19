import SectionTitle from "../Common/SectionTitle";

const features = [
  "Software Engineering",
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Strategy & Consulting",
  "Developer friendly",
];

const CheckItem = ({ text }) => (
  <li className="flex items-center text-lg font-medium text-body-color mb-4">
    <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
      <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
      </svg>
    </span>
    {text}
  </li>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 border-b border-body-color/[.15] dark:border-white/[.15] pb-16 md:pb-20 lg:pb-28">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle
              title="Partner with Us – Let's Build Success Together!"
              paragraph="Join us as a trusted partner and unlock new opportunities for growth and innovation. Whether you’re looking to collaborate on projects, expand your business, or create something exceptional, we’re here to make it happen."
              mb="40px"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {features.map((item, index) => (
                <CheckItem key={index} text={item} />
              ))}
            </ul>
           <p>In the fast-paced digital world, having a strong online presence is crucial for businesses of all sizes. Startup Infotech is a leading web development company that provides cutting-edge solutions to help transformation and maintain a strong digital footprint.</p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[25/24] max-w-[500px] mx-auto lg:ml-auto">
               <video width="640" height="360" autoPlay loop muted className="rounded-lg shadow-lg">
        <source src="/images/PinDown.io_@novarealorlando_1759581471.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
