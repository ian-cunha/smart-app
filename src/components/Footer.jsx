import logo from "../assets/logoSmart.svg";

function Footer() {
  return (
    <footer class="bg-dark text-light p-5">
      <div class="d-flex flex-sm-row flex-column justify-content-around align-items-center">
        <div>
          <img width="150px" class="center mt-2 mb-2" src={logo} alt="Art by Marta" />
        </div>
        <div>
          <h5 class="text-center container fs-6 mt-2 mb-2">@ 2022 Marta Inteligência Imobiliária - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330 </h5>
        </div>
        <div>
          <a class="redes" target="_blank" href="https://www.instagram.com/smart.imobiliario/"><i class="bi bi-instagram m-2 fs-1"></i></a>
          <a class="redes" target="_blank" href="https://www.linkedin.com/company/marta-inteligencia-imobiliaria/"><i class="bi bi-linkedin m-2 fs-1"></i></a>
          <a class="redes" target="_blank" href="https://www.facebook.com/smartimobiliario/"><i class="bi bi-facebook m-2 fs-1"></i></a>
        </div>
      </div>
      <p class="text-center fw-light container fs-7 mt-2 mb-2">"Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM."
        <a target="_blank" class="text-light" href="https://deixacommarta.com.br/privacidade.php"> Política de privacidade </a></p>
    </footer>
  )
}

export default Footer