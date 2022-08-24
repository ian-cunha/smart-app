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
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <i class="bi bi-person-circle fs-1"></i>
                <h5 className='fs-6'>1 usuário</h5>
              </div>
              <div class="col">
                <i class="bi bi-building fs-1"></i>
                <h5 className='fs-6'>50 Imóveis ativos</h5>
              </div>
              <div class="col">
                <i class="bi bi-person-lines-fill fs-1"></i>
                <h5 className='fs-6'>Cadastro de Clientes</h5>
              </div>
              <div class="col">
                <i class="bi bi-window fs-1"></i>
                <h5 className='fs-6'>Site Personalizado</h5>
              </div>
            </div>
          </div>
          <a type="button" href="#detalhes-plano" className="btn mb-3 mt-3 fw-semibold">Ver plano detalhado <i class="bi bi-arrow-down-short"></i></a>
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

          <div className='container'>
            <h2 id="detalhes-plano" className="fs-1 text-center mb-4 texto-1">Compare os planos</h2>

            <div className="table-responsive">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th></th>
                    <th>Gratuito</th>
                    <th>Autônomo</th>
                    <th>Micro</th>
                    <th>Pequeno</th>
                    <th>Médio</th>
                    <th>Grande</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">Número de Usuários</th>
                    <td>1</td>
                    <td>1</td>
                    <td>3</td>
                    <td>5</td>
                    <td>10</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Cadastro de Imóveis</th>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Cadastro de Clientes</th>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Imóveis Ativos</th>
                    <td>50</td>
                    <td>200</td>
                    <td>400</td>
                    <td>Ilimitado</td>
                    <td>Ilimitado</td>
                    <td>Ilimitado</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">CRM Completo</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Acesso a Rede de Parceiros</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Integração com Portais Imobiliários</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Compartilhamento em Redes Sociais</th>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">APP Mobile</th>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Site Modelo Básico</th>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Site Modelo Premium</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Imóveis de Construtoras</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Material online para treinamentos</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Atendimento por whatsapp</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start p-2 fs-6 fw-normal">Parametrização e configuração da conta</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Implantação de 05 empreendimento(s) e unidades</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Treinamentos das equipes de vendas e gerentes</th>
                    <td><i className="bi bi-x text-danger"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                    <td><i className="bi bi-check2 text-primary"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Gratuito