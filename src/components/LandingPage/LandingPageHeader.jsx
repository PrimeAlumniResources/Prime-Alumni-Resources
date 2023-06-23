import PrimeLogo from './images/PrimeLogo.png';

function LandingPageHeader() {
    return (
        <div className="w-screen h-20 bg-black flex items-center justify-center fixed"
          style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%), url(${PrimeLogo})`,
          backgroundSize: "200px",
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          }}>

        </div>
    )
}

export default LandingPageHeader;       