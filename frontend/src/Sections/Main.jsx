import TrustedCompanies from '../Components/TrustedCompanies';
import Cars from '../Components/Cars';
import Advantages from '../Components/Advantages';

const Main = () => {
    return (
        <div className='md:px-[3.5rem] mt-8'>
            <TrustedCompanies />
            <Cars />
            <Advantages />
        </div>
    );
};

export default Main;
