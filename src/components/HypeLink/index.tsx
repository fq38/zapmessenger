import baixar from 'assets/img/baixar.png';

function HypeLink() {
    return (
        
      
      <div className="container-fluid">
        <a className="navbar-brand"  target="_blank" href="https://play.google.com/store/apps/details?id=com.zapemessenger_9756754">
          <img src={baixar} alt="" width="500" height="200" className="d-inline-block align-text-top"/>
          baixe agora clique aqui
        </a>
      </div>
    
      
    );
  }
  
  export default HypeLink;