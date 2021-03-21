
function Navbur(){
    return(
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <form class="form-inline my-2 my-lg-0">
     <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
   </form>
   </nav>
    );
}

export default Navbur