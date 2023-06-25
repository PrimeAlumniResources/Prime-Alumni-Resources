import PrimeLogo from './images/PrimeLogo.png';
import './LandingPageHeader.css';

function LandingPageHeader() {
    return (
        <div className="w-screen h-24 bg-black flex fixed"
          style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${PrimeLogo})`,
          backgroundSize: "160px",
          backgroundPosition: "center 20px", 
          backgroundRepeat: "no-repeat",
          }}>
            <div className='landing-title text-xl text-[#8a8a8a] flex justify-center text-white mt-16 mx-auto'>
              Alumni Database
            </div>
        </div>
    )
}

export default LandingPageHeader;       