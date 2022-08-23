import logo from "../assets/logoSmart.svg";

function Nav() {
  return (
    <div>
      <nav className="menu navbar fixed-top navbar-expand-lg bg-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img width="130px" className="d-inline-block align-text-top" src={logo} alt="Smart" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-light"><i className="bi bi-list"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-semibold">
              <li className="nav-item">
                <a className="nav-link navbutton" aria-current="page" href="#">Página inicial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbutton" href="#software">Software</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbutton" href="#sites">Sites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbutton" href="#clientes">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbutton" target="_blank" href="https://www.youtube.com/channel/UCeAgtObzcuLG6DLb0rcywyA/videos">Videos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link buttonplanos fw-bold" href="/planos">Planos</a>
              </li>
            </ul>
            <a className="btn store desktop" target="_blank" href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario"><i class="bi bi-google-play"></i></a>
            <a className="btn store desktop m-2" target="_blank" href="https://apps.apple.com/br/app/smart-imobiliario/id1128234098"><i class="bi bi-apple"></i></a>
            <a className="btn btn-orange fw-semibold" href="/gratuito">Plano Gratuito</a>
            <a className="btn btn-blue fw-semibold m-2" target="_blank" href="https://app.smartimobiliario.com.br/">Login <i class="bi bi-box-arrow-in-right"></i></a>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Nav