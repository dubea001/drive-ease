import Header from './Sections/Header';
import Main from './Sections/Main';
import Footer from './Sections/Footer';
import Testimonial from './Components/Testimonial';
import Faq from './Components/Faq';
import RentCars from './Components/RentCars';
import Navbar from './Components/Navbar';

const App = () => {
    return (
        <div className='font-Nunito'>
            <Navbar />
            <Header />
            <Main />
            <Testimonial />
            <Faq />
            <RentCars />
            <Footer />
        </div>
    );
};

export default App;
