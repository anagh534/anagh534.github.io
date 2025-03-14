import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import Works from "@/components/home/works";

export const metadata = {
  title: "Flutter App & Web Development Expert in Kasaragod | MERN Stack Specialist | Best App & Website Design Services in Kerala - ANAGH K R",
  description: "Expert in app development, web development, web design, website redesign, Figma to website, and PSD to website conversion services. Delivering stunning designs and flawless functionality to elevate your online presence!",
  keywords: "Flutter developer kasaragod,App Development Services in Kerala, Affordable Web Design in Kasaragod, Best Web Development Company in Kerala, Figma to Website Conversion Services, Modern Website Redesign Solutions, Small Business Website Development in Kerala, E-commerce Website Development in Kasaragod, Portfolio Website Designer in Kerala, Fast-Loading Website Development Services, Hire App Developer in Kasaragod, Web Design Services in Kerala, Affordable Web Developer in India, App and Web Development in Kasaragod, Kerala-Based Website Designer, How to Hire a Web Developer for My Business, Best App Developers for Startups in Kerala, Affordable Website Redesign Ideas, Freelance Web Designer for Personal Websites, Convert PSD to Responsive Website Quickly, Software Development Solutions in Kerala, Professional App Development Services, Top Web Design Company in Kerala, Comprehensive Web Development Services, Expert Figma to Website Conversion, PSD to HTML Conversion Services, Website Redesign Experts in Kerala, Responsive Website Design Services, Custom Website Solutions in Kasaragod, Freelance Web Developer in Kerala, React Website Development Services, Flutter Developers in Kasaragod, Web Development Services in Kannur, Professional Web Design in Cherupuzha, Affordable Web Solutions in Kozhikode, Top Web Development in Calicut, Web Design and Development in Kochi, Software Solutions in Malappuram, Web Development Experts in Palakkad, Website Design Services in Wayanad",
  author: "ANAGH K R",
  robots: "index, follow",
  ogTitle: "Flutter App & Web Development Expert in Kasaragod | MERN Stack Specialist",
  ogDescription: "Expert in app development, web development, web design, website redesign, Figma to website, and PSD to website conversion services. Delivering stunning designs and flawless functionality to elevate your online presence!",
  ogUrl: "https://anagh534.github.io",
  ogImage: "/assets/profile.webp"
};

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      {/* <Contact/> */}
    </>
  );
}
