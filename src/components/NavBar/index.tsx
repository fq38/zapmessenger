import imglogo from 'assets/img/logo.jpg';

function NavBar() {
    return (
        
      <nav className="navbar navbar-light bg-light border-bottom shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={imglogo} alt="zapmessenger" width="30" height="30" className="d-inline-block align-text-top"/>
          zapmessenger
        </a>
      </div>
    </nav>
      
    );
  }
  
  export default NavBar;
  