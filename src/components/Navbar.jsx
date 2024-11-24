import './styles/components.css'
import  Logo from  '../assets/logo.png' 



function Navbar() {



return (
    <header>
      <nav className="navbar">
        <div className="header-items">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><h1><img src={Logo} alt=""/></h1></li>
                <li><a href="#artists">Testimonial</a></li>
                <li><a href="#contact">Contact</a></li>  
            </ul>   
        </div>

    </nav>  
    </header>
    
)

}


export default Navbar;