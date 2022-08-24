import { useState } from 'react';
import Forms from './Forms';

const Valores = () => {
  const [autonomo, setAutonomo] = useState('R$99');
  const [micro, setMicro] = useState('R$149');
  const [pequeno, setPequeno] = useState('R$249');
  const [medio, setMedio] = useState('R$349');
  const [grande, setGrande] = useState('R$499');

  function Mensal() {
    setAutonomo('R$99');
    setMicro('R$149');
    setPequeno('R$249');
    setMedio('R$349');
    setGrande('R$499');
  }

  function Anual() {
    setAutonomo('R$79');
    setMicro('R$119');
    setPequeno('R$199');
    setMedio('R$279');
    setGrande('R$359');
  }

  return (
    <div>
      <Forms />
      <div className="container mt-2 mb-2">
        <button className="btn btn-orange m-1" onClick={Mensal}>Mensal</button>
        <button className="btn btn-orange m-1" onClick={Anual}>Anual</button>
      </div>

      <div className="row row-cols-1 row-cols-md-5 mb-3 text-center">

        <div id="carouselPlanos" className="w-100 h-100 carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">

              <div className="row row-cols-md-4 d-flex justify-content-center">
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Autônomo</h4>
                      <p className="my-3 p-2 fs-6 fw-normal">Para o corretor autônomo</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{autonomo}</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>1 usuário</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> 200 imóveis ativos</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes </li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Integração com Portais</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Premium</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> CRM Completo</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Atendimento por whatsapp</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Implantação de 05 empreendimento(s) e unidades</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Treinamentos das equipes de vendas e gerentes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Parametrização e configuração da conta</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#autonomo">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2  fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/cadastro/planoSmart?indicadorPlano=2" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Micro</h4>
                      <p className="my-3 p-2 fs-6 fw-normal">Para o corretor que tem um funcionário ou sócio</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{micro}</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>3 usuários</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> 400 imóveis ativos</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes </li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Integração com Portais</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Premium</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> CRM Completo</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Atendimento por whatsapp</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Implantação de 05 empreendimento(s) e unidades</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Treinamentos das equipes de vendas e gerentes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Parametrização e configuração da conta</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#micro">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/cadastro/planoSmart?indicadorPlano=3" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Pequeno</h4>
                      <p className="my-3">Ideal para pequenas imobiliárias</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{pequeno}</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>5 usuários</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Imóveis Ilimitados</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Integração com Portais</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Premium</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> CRM Completo</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Atendimento por whatsapp</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Implantação de 05 empreendimento(s) e unidades</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Treinamentos das equipes de vendas e gerentes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Parametrização e configuração da conta</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#pequeno">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/cadastro/planoSmart?indicadorPlano=5" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="carousel-item">

              <div className="row row-cols-md-4 d-flex justify-content-center">
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Médio</h4>
                      <p className="my-3 p-2 fs-6 fw-normal">Para imobiliárias de médio porte ou grupo de corretores associados</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{medio}</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>10 usuários</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Imóveis Ilimitados</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Integração com Portais</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Premium</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> CRM Completo</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Atendimento por whatsapp</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Implantação de 05 empreendimento(s) e unidades</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Treinamentos das equipes de vendas e gerentes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Parametrização e configuração da conta</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#medio">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/cadastro/planoSmart?indicadorPlano=10" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Grande</h4>
                      <p className="my-3 p-2 fs-6 fw-normal">Para imobiliárias grandes. Consulte o valor para usuários extras</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">{grande}</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>20 usuários</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Imóveis Ilimitados</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Integração com Portais</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Premium</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> CRM Completo</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Atendimento por whatsapp</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Implantação de 05 empreendimento(s) e unidades</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Treinamentos das equipes de vendas e gerentes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Parametrização e configuração da conta</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#grande">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/cadastro/planoSmart?indicadorPlano=20" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="py-3">
                      <h4 className="my-0 fw-normal plano-texto">Gratuito</h4>
                      <p className="my-3 p-2 fs-6 fw-normal">Para quem deseja começar a organizar seu site, cadastro, imóveis e clientes</p>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title">Gratuito</h1><small className="text-muted fw-light">/mês</small>
                      <p className="my-3 bold-font">Consulte Implantação</p>
                      <ul className="list-unstyled mt-3 mb-4 info-plano">
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> <b>1 usuário</b></li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> 50 Imóveis ativos</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Cadastro de Clientes</li>
                        <li className="pb-1 size-list"><i className="bi bi-check text-primary"></i> Site Personalizado</li>
                      </ul>
                      <a type="button" href="#detalhes-plano" className="btn mb-3">Ver plano detalhado</a>
                      <button type="button" className="w-100 btn btn-lg btn-orange" data-bs-toggle="modal" data-bs-target="#gratuito">Saber mais</button>
                      <a className="mt-1 w-100 btn btn-lg btn-blue2 fw-bold" target="_blank" href="https://app.smartimobiliario.com.br/SmartImobiliario-Corretor" role="button">Assine já! <i className="bi bi-arrow-right-short"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselPlanos" data-bs-slide="prev">
            <i className="m-0 p-0 text-dark bi bi-arrow-left-circle-fill"></i>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselPlanos" data-bs-slide="next">
            <i className="m-0 p-0 text-dark bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Valores;
