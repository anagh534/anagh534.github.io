import ServiceComponent from "./ServiceComponent";
import './services.css'
export const metadata = {
    title: "Anagh K R - Expert Services in Web & App Development | Kasaragod, Kerala",
    description: "Discover Anagh K R’s professional services in web and app development from Kasaragod, Kerala. Specializing in Flutter app development, MERN stack web development, e-commerce solutions, and more. Offering custom solutions for your digital needs, from secure file handling to scalable applications. Connect with a dedicated professional who delivers exceptional results with a user-first approach.",
    keywords: "Web development services, App development Kasaragod, Flutter developer Kerala, MERN stack development, E-commerce solutions Kasaragod, Secure file handling, Custom web applications, Full-Stack Developer Kasaragod, Kasaragod-based Flutter app development, Digital solutions expert Kerala, Innovative web and app development, Professional developer services in Kerala, Kasaragod web design and development",
    author: "ANAGH K R",
    robots: "index, follow",
    ogTitle: "Anagh K R - Expert Services in Web & App Development | Kasaragod, Kerala",
    ogDescription: "Discover Anagh K R’s professional services in web and app development from Kasaragod, Kerala. Specializing in Flutter app development, MERN stack web development, e-commerce solutions, and more. Offering custom solutions for your digital needs, from secure file handling to scalable applications. Connect with a dedicated professional who delivers exceptional results with a user-first approach.",
    ogUrl: "https://anagh534.github.io/services",
    // ogImage: "https://yourwebsite.com/path/to/image.jpg"
};
export default function Services() {
    return (
        <div className="dark">
            <div className="container mt-4 py-5">
                <h1 className="h1 text-center" id="pageHeaderTitle">Services</h1>
                <ServiceComponent title={'Web Development'} image={'https://pix4free.org/assets/library/2021-05-25/originals/web_developer.jpg'} description={"As an experienced web developer based in Kasaragod, I specialize in creating dynamic, responsive, and interactive websites that provide seamless experiences across all devices. Whether you need a simple portfolio site, a business platform, or a complex web application, I have the expertise to bring your vision to life.I offer full-stack web development services, utilizing the latest technologies to build robust, scalable, and high-performing websites. From the frontend design with modern frameworks like React to the backend with Node.js, Express, and MongoDB, I ensure your website is optimized for speed, security, and functionality.My approach to web development is highly collaborative. I work closely with clients to understand their goals and deliver custom solutions tailored to their needs. Whether it's building a new website or upgrading an existing one, I focus on creating websites that are user-friendly, visually appealing, and easy to navigate, ensuring a positive user experience that keeps visitors engaged.With a strong emphasis on clean code, responsive design, and search engine optimization (SEO), I guarantee that your website will not only look great but also perform well on search engines and provide excellent usability."} />
                <ServiceComponent title={'Ecommerce Website'} image={'https://www.stockvault.net/data/2018/07/12/253067/preview16.jpg'} description={"As a skilled web developer based in Kasaragod, I specialize in designing and developing high-performance e-commerce websites that help businesses grow and thrive online. Whether you’re starting a new business or looking to expand your existing one, I create e-commerce solutions that are both user-friendly and feature-rich.I offer full-stack e-commerce website development services, using powerful platforms and technologies like Shopify, WooCommerce, and custom-built solutions using React, Node.js, and MongoDB. My goal is to build scalable online stores that provide seamless shopping experiences, encourage conversions, and enhance customer satisfaction.With a focus on responsive design, easy navigation, and secure payment integration, I ensure that your e-commerce site is optimized for both desktop and mobile users. I integrate essential features like product catalogs, shopping carts, secure checkout systems, and inventory management, all designed to streamline your business operations.In addition to development, I also help with SEO optimization to boost your website’s visibility on search engines and improve your sales. From product pages to customer management systems, I offer a complete suite of services to create an e-commerce website that works for you and your customers."} />
                <ServiceComponent title={'Web Design'} image={'https://www.picpedia.org/chalkboard/images/web-design.jpg'} description={"I’m a professional static website designer from Kasaragod, dedicated to crafting visually stunning and functional websites that are both user-friendly and highly effective. My designs focus on delivering simple yet powerful online experiences at affordable prices, making it easy for you to establish a professional web presence.I specialize in creating static websites that feature well-structured, keyword-optimized content, helping you increase visibility on search engines like Google, Yahoo, and Bing. Whether you're looking to showcase a product, service, or brand, I ensure your website delivers the right message to your target audience.With a deep understanding of SEO principles and web design, I provide tailored static website development services across India. My static websites typically include 4-5 pages, coded in HTML, designed to deliver consistent content to all visitors. This simplicity not only keeps the design clean but also enhances the speed and performance of your site. Low-Cost Freelance Web Designer In India"} />
                <ServiceComponent title={'Website Redesign'} image={'https://www.newsletterstation.com/news/uploads/9/responsive-website-600450.jpg'} description={"As a professional web designer and developer based in Kasaragod, I specialize in revamping outdated websites and transforming them into modern, visually appealing, and highly functional platforms. Whether your site is looking old, not performing well, or simply needs a fresh look, I offer comprehensive website redesigning services that breathe new life into your online presence. My redesign services are focused on improving user experience, enhancing site performance, and ensuring compatibility across all devices. I use the latest design trends, technologies, and SEO best practices to deliver websites that are not only aesthetically pleasing but also user-friendly, responsive, and optimized for search engines. I start by analyzing your existing website’s design, layout, and functionality, identifying areas for improvement. Then, I work closely with you to develop a design strategy that aligns with your business goals and target audience. Whether it's improving navigation, speeding up load times, or ensuring mobile responsiveness, I take a holistic approach to redesigning your website. I also focus on updating content and optimizing your site to ensure it ranks well on search engines. Low-Cost Freelance Web Designer In Kasaragod, Kerala. My goal is to deliver a redesigned website that not only looks great but also enhances user engagement, improves conversion rates, and drives more traffic to your business."} />
                <ServiceComponent title={'PSD to Website Development'} image={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c626ae6a-5145-41bc-8e5d-383503c0041f/d8t2ot1-f995dc33-1c9f-4b00-a609-8a2595605ae0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MjZhZTZhLTUxNDUtNDFiYy04ZTVkLTM4MzUwM2MwMDQxZlwvZDh0Mm90MS1mOTk1ZGMzMy0xYzlmLTRiMDAtYTYwOS04YTI1OTU2MDVhZTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BRvKeFWV6vF0wKrP4g659PnwKApOtl7Xmmdyj6PzW5Q'} description={"As an expert web developer in Kasaragod, I offer professional PSD to website conversion services, turning your Photoshop designs into fully functional, responsive, and optimized websites. Whether you have a custom design in PSD format or an existing template, I bring your ideas to life with clean, pixel-perfect code. I convert your PSD designs into HTML, CSS, and JavaScript, ensuring your website is visually consistent with the original design while being responsive across all devices. I focus on delivering fast-loading, cross-browser compatible websites with SEO-friendly features. Additionally, I ensure that the website's structure and user interface are optimized for a smooth, intuitive user experience. With a deep understanding of modern web development practices, I ensure that your PSD design is transformed into a high-quality, professional website that represents your brand and meets your business goals."} />
                <ServiceComponent title={'Figma to Website Development'} image={'https://cameronstevens.ca/images/projects/grae-speakers/ui-desktop-hifi-2000x1333.jpg'} description={"As a skilled web developer based in Kasaragod, I provide Figma to website conversion services, transforming your Figma designs into fully functional and responsive websites. Whether you're a designer or a business owner with a Figma prototype, I bring your design to life with high-quality HTML, CSS, and JavaScript code. I ensure your website maintains the integrity of the original Figma design, with pixel-perfect accuracy and a focus on responsiveness across different screen sizes. From interactive elements to smooth transitions, I make sure the website feels just as intuitive and engaging as the Figma prototype. I also optimize the site for speed, SEO, and cross-browser compatibility to provide the best user experience possible. With my expertise in both design and development, I offer a seamless and efficient process for converting your Figma designs into a professional, user-friendly website."} />
                <ServiceComponent title={'Flutter App Development'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAu6nkLc-1ZFtwTVFsySP1Ga4gDZ9eqAa0w&s'} description={"As a professional Flutter app developer based in Kasaragod, I specialize in building high-performance, cross-platform mobile applications for both iOS and Android using Flutter. With my expertise in Flutter, I create beautiful, fast, and responsive apps that provide a native-like experience while reducing development time and costs. Whether you need a simple mobile app or a complex solution, I offer end-to-end services from concept to deployment. I focus on delivering apps that are user-friendly, feature-rich, and optimized for performance. By leveraging Flutter's powerful framework, I ensure seamless integration with various APIs, databases, and third-party services. My Flutter app development process includes a thorough understanding of your business requirements, designing intuitive UI/UX, writing clean code, and conducting rigorous testing to ensure your app functions flawlessly. From startups to enterprises, I help businesses take their mobile presence to the next level with custom Flutter apps tailored to their specific needs and goals."} />
                <ServiceComponent title={'Academic Project Development'} image={'https://storage.needpix.com/rsynced_images/college-2981035_1280.jpg'} description={'As a dedicated web and mobile app developer, I offer specialized services for academic projects, helping students and academic institutions create innovative, functional, and user-friendly applications. Whether it’s a website, mobile app, or software solution, I bring your academic ideas to life with clean code, modern design, and user-centric features. I focus on delivering projects that meet all your academic requirements while ensuring they are well-structured, scalable, and easy to use. With expertise in web development (HTML, CSS, JavaScript, React, Node.js) and mobile app development (Flutter), I ensure that your academic project not only impresses your professors but also provides practical and real-world value. From simple websites to complex systems, I guide you through the entire development process, ensuring timely delivery and quality results.'} />
            </div>
        </div>
    )
}