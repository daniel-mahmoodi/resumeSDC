import './Navbar.css';

const Navbar = () => {
  return (
  <div className=''> 
  <div className='navbarCenter nav justify-content-center'>

    <nav className="navbar navbar-expand-lg navbar-dark navbarCenter ">
    <a className="navbar-brand mr-5" href="#">Resume<span className="text-danger">.SDCodes</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-5">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Blog
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#">Blog 1</a>
            <a className="dropdown-item" href="#">Blog 2</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
    </div>
            </div>
  );
}

export default Navbar;
