import PrimeLogo from './images/PrimeLogo.png';

function LandingPageHeader() {
    return (
        <div className="w-screen h-16 bg-black flex items-center justify-center fixed">
          <div className="image" 
            style={{ 
            backgroundImage: `url(${PrimeLogo})`,
            backgroundSize: "200px",
            backgroundPosition: "center", 
          
            }}>
          
          </div>
            
        </div>
    )
}

export default LandingPageHeader;       