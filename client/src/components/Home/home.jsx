import deco_background from '../../../public/deco_background.jpg';
import './home.css';

export const Home = () => {
    return (
        <div className='home_container'>



            <div className='image_container'>
                <img className='home_image' src={deco_background} alt="Decorative background" />
                <div className='statement_container'>
                    <p className='statement'>
                        Welcome to Deco Borders & Concrete
                    </p>
                    <p className='statement'> Discover More About Our Expertise and Services Below </p>
                </div>
            </div>



            <div className='about_section'>


                <p className='about_header'>About Us</p>

                <p className='about_paragraph'>
                    Welcome to Deco Border & Concrete, your trusted residential concrete contractor dedicated to transforming your outdoor and indoor spaces with high-quality concrete solutions. With years of experience in the industry, we pride ourselves on delivering exceptional craftsmanship and customer service that exceeds expectations.
                </p>


                <p className='about_header'>Our Services</p>

                <ul className='about_list'>
                    <li><u>Landscape Curbing</u>: Enhance the beauty of your garden and lawn with our custom landscape curbing. Our decorative edging options add a clean and polished look to your outdoor spaces, making your landscaping stand out.</li>
                    <li><u>Driveways</u>: Whether you're looking to install a new driveway or replace an existing one, we provide durable and aesthetically pleasing solutions. Our driveways are built to withstand heavy traffic and the elements, ensuring long-lasting performance and curb appeal.</li>
                    <li><u>Patios</u>: Create the perfect outdoor living area with our expertly designed and constructed patios. From simple concrete slabs to intricate stamped designs, we offer a range of options to suit your style and needs.</li>
                    <li><u>Sidewalks</u>: Safe, functional, and attractive sidewalks are essential for any property. We specialize in installing and repairing sidewalks that enhance the accessibility and appearance of your home.</li>
                    <li><u>Garage Floors</u>: Our concrete flooring solutions are ideal for garage spaces. We provide smooth, durable surfaces that are easy to maintain and can be customized with various finishes and coatings.</li>
                    <li><u>Stamped Concrete</u>: Add a touch of elegance and uniqueness to your property with stamped concrete. We offer a variety of patterns and colors to choose from, mimicking the look of natural stone, brick, or tile while providing the strength and durability of concrete.</li>
                </ul>


                <p className='about_header'>Why Choose Us?</p>

                <p className='about_paragraph'>
                    At Deco Borders & Concrete, we understand that every project is unique, and we work closely with our clients to ensure their vision becomes a reality. Our team of skilled professionals is committed to using the best materials and the latest techniques to deliver results that not only meet but exceed your expectations.
                </p>


                <p className='about_header'>Free Estimates</p>

                <p className='about_paragraph'>
                    We believe in transparency and value, which is why we offer free estimates for all our services. Our experts will assess your needs and provide you with a detailed, no-obligation quote, helping you make an informed decision.
                </p>


                <p className='about_header'>Service Area</p>

                <p className='about_paragraph'>
                    Proudly serving Mercer County and the surrounding areas, we are dedicated to bringing our high standards of quality and service to your community. No matter the size or scope of your project, you can count on us to deliver outstanding results.
                </p>


                <p className='about_header'>Contact Us</p>

                <p className='about_paragraph'>
                    Ready to get started on your next concrete project? Contact us today for your free estimate and let Deco Borders & Concrete be your partner in creating beautiful, lasting concrete solutions for your home. We look forward to working with you!
                </p>
            </div>
        </div>
    );
};

