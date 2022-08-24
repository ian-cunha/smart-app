import NavSec from '../components/NavSec'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
import Valores from '../components/Valores'

function Planos() {
  return (
    <div>

      <NavSec />
      <Whatsapp />

      <div className='planos'>

        <div className='container mt-5 pt-5'>
          <h2 className='fs-1'>Planos</h2>
          <h3 className='fs-5 fw-normal'>Escolha o plano ideal para deixar o seu negócio mais inteligente</h3>
        </div>
        
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

      <Footer />
    </div >
  )
}

export default Planos