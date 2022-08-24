import NavSec from '../components/NavSec'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import Forms from '../components/Forms'
import Valores from '../components/Valores'

function Gratuito() {
  return (
    <div>
      <NavSec />
      <Whatsapp />
      <Forms />

      <div>

        <div className='container mt-5 pt-5'>
          <h2 className='fs-1'>Plano Gratuito</h2>
          <h3 className='fs-5 fw-normal'>Para quem deseja começar a organizar seu site, cadastro, imóveis e clientes</h3>
        </div>

        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <p className="my-3 bold-font">Consulte Implantação</p>
          <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
          <div className='d-flex flex-sm-row flex-column justify-content-center align-items-center'>
            <button type="button" className="m-1 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#gratuito">Saber mais</button>
            <a className="m-1 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/SmartImobiliario-Corretor" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
          </div>
        </div>

        <div className='container mt-5'>
          <h2 className='fs-1'>Outros planos</h2>
          <h3 className='fs-5 fw-normal'>Escolha o plano ideal para deixar o seu negócio mais inteligente</h3>
        </div>

        <div className='planos'>
          <Valores />
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Gratuito