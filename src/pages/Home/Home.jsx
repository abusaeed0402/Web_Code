
import Hiro from './Hiro';
import Tools from './Tools';
import CompanyLogos from './CompanyLogos';
import Services from './Services';
import Testimonials from './Testimonials';
import Blogs from './../blogs.jsx/Blogs';
import TeamSection from './TeamSection';
import Pricing from './Pricing';
import FAQs from './FAQs';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <>
           <Hiro/>
           <Tools/>
           <CompanyLogos/>
           <Services/>
           <Testimonials/>
           <Blogs/>
           <TeamSection/>
           <Pricing/>
           <FAQs/>
           <Newsletter/>
        </>
    );
};

export default Home;