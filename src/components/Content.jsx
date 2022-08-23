import grid1 from "../assets/grid/grid1.svg";
import grid2 from "../assets/grid/grid2.svg";
import grid3 from "../assets/grid/grid3.svg";
import grid4 from "../assets/grid/grid4.svg";
import grid5 from "../assets/grid/grid5.svg";
import grid6 from "../assets/grid/grid6.svg";
import grid7 from "../assets/grid/grid7.svg";
import grid8 from "../assets/grid/grid8.svg";
import grid9 from "../assets/grid/grid9.svg";
import grid10 from "../assets/grid/grid10.svg";
import grid11 from "../assets/grid/grid11.svg";
import smartphone from "../assets/smartphone.svg";
import googleplay from "../assets/googleplay.svg";
import apple from "../assets/apple.svg";
import mercadolivre from "../assets/integracao/logo_mercadolivre.svg";
import ademi from "../assets/integracao/logo-ademi.svg";
import olx from "../assets/integracao/logo-olx.svg";
import vivareal from "../assets/integracao/logo-viva.svg";
import casamineira from "../assets/integracao/logo-casamineira.svg";
import chave from "../assets/integracao/logo-chave.svg";
import creci from "../assets/integracao/logo-creci.svg";
import df from "../assets/integracao/logo-df.svg";
import dreamcasa from "../assets/integracao/logo-dreamcasa.svg";
import expo from "../assets/integracao/logo-expo.svg";
import imoWeb from "../assets/integracao/logo-imoWeb.svg";
import lugarcerto from "../assets/integracao/logo-lugarcerto.svg";
import moving from "../assets/integracao/logo-moving.svg";
import smartxml from "../assets/integracao/logo-smartxml.svg";
import zap from "../assets/integracao/logo-zap.svg";
import site from "../assets/site.svg";
import tempo from "../assets/icon-tempo.svg";
import busca from "../assets/icon-busca.svg";
import cel from "../assets/icon-cel.svg";
import conlar from "../assets/clientes/conlar.svg";
import rogerio from "../assets/clientes/rogerio.svg";
import dimas from "../assets/clientes/dimas.svg";
import valeria from "../assets/clientes/valeria.svg";
import migrar from "../assets/migrar.svg";

function Content() {
  return (
    <div id="home">

      <button type="button" data-bs-toggle="modal" data-bs-target="#whatsappModal" className="wpp-button">
        <i className="bi bi-whatsapp"></i>
      </button>

      <div className="modal fade" id="whatsappModal" tabindex="-1" aria-labelledby="whatsappModalLabal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i class="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline">
                <fieldset>
                  <div>
                    <label for="contatoNome" className="form-label text-light">Nome</label>
                    <input type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label for="contatoEmail" className="form-label text-light">Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label for="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input type="tel" maxlength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button type="submit" className="btn btn-submit btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i class="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="content text-light">
        <h1 className="fw-bold">Sistema imobiliário completo com site de imóveis</h1>
        <h2 className="fw-normal fs-5">Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades.</h2>
        <h3>AUMENTE JÁ SUAS VENDAS <i className="bi bi-graph-up-arrow"></i></h3>
        <div className="d-flex justify-content-center align-items-center flex-sm-row flex-column">
          <button type="button" className="btn btn-whatsapp m-2 p-2" data-bs-toggle="modal" data-bs-target="#whatsappModal">
            <i className="bi bi-whatsapp"></i> Fale com um consultor
          </button>
          <a type="button" href="/Gratuito" className="btn btn-gratuito m-2 p-2">Plano Gratuito <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div id="software">
        <h2 className="mt-5 fs-1 color-1 p-2">Gestão inteligente de seus negócios</h2>
        <h4 className="mt-2 mb-5 fs-5 fw-normal p-2">Acesse seus imóveis e publique em portais em uma única plataforma.</h4>
        <div className="container text-center">
          <div className="row p-2">
            <div className="col mt-2">
              <img src={grid1} alt="Anúncio em Portais" />
              <h6 className="grid-color mt-2">Anúncio em Portais</h6>
              <p>Integre automaticamente seus imóveis com portais imobiliários.</p>
            </div>
            <div className="col mt-2">
              <img src={grid2} alt="Site de Imóveis" />
              <h6 className="grid-color mt-2">Site de Imóveis</h6>
              <p>Divulgue seus imóveis em seu próprio site.</p>
            </div>
            <div className="col mt-2">
              <img src={grid3} alt="Funil de vendas" />
              <h6 className="grid-color mt-2">Funil de vendas</h6>
              <p>Controle a jornada de venda do seu imóvel, em tempo real.</p>
            </div>
            <div className="col mt-2">
              <img src={grid4} alt="Atendimento a Clientes" />
              <h6 className="grid-color mt-2">Atendimento a Clientes</h6>
              <p>Contato direto com o cliente via WhatsApp, através do número cadastrado no sistema.</p>
            </div>
            <div className="col mt-2">
              <img src={grid5} alt="Gestão de Imóveis" />
              <h6 className="grid-color mt-2">Gestão de Imóveis</h6>
              <p>Tenha cadastros ilimitados e acesso a todos os seus imóveis em uma única plataforma.</p>
            </div>
            <div className="col mt-2">
              <img src={grid6} alt="Realize Parcerias" />
              <h6 className="grid-color mt-2">Anúncio em Portais</h6>
              <p>Amplie sua rede de negócios online, encontrando parceiros da sua região.</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img src={grid7} alt="Detetive Imobiliário" />
              <h6 className="grid-color mt-2">Detetive Imobiliário</h6>
              <p>Encontre o match ideal entre clientes interessados e suas captações de imóveis.</p>
            </div>
            <div className="col mt-2">
              <img src={grid8} alt="Painel de Controle - Dashboard" />
              <h6 className="grid-color mt-2">Painel de Controle - Dashboard</h6>
              <p>Visualize suas oportunidades de negócios e fases de venda, atenda com agilidade seus clientes, entre outras facilidades</p>
            </div>
            <div className="col v">
              <img src={grid9} alt="Roteiro de Visitas" />
              <h6 className="grid-color mt-2">Roteiro de Visitas</h6>
              <p>Acompanhe como foram as visitas aos imóveis e o feedback dos clientes.</p>
            </div>
            <div className="col mt-2">
              <img src={grid10} alt="Feedback ao Proprietário" />
              <h6 className="grid-color mt-2">Feedback ao Proprietário</h6>
              <p>Relacionamento com os proprietários através de informações completas e automáticas do processo de venda.</p>
            </div>
            <div className="col mt-2">
              <img src={grid11} alt="Compartilha Imóveis" />
              <h6 className="grid-color mt-2">Compartilha Imóveis</h6>
              <p>Compartilhe imóveis compatíveis com interesse de seu cliente via whatsapp e email.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="aplicativo">
        <h2 className="mt-5 fs-1 color-1 p-2">Aplicativo para Corretores e Imobiliárias</h2>
        <h4 className="mt-2 mb-5 fs-5 p-2 fw-normal">Baixe o aplicativo SMART e tenha todas as informações dos seus imóveis.</h4>
        <div className="container">
          <div className="row m-5 text-center">
            <img src={smartphone} alt="Smartphone" />
          </div>
          <div className="d-flex flex-sm-row flex-column justify-content-center">
            <a target="_blank" href="https://apps.apple.com/br/app/smart-imobiliario/id1128234098">
              <img src={googleplay} alt="Google Play" />
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario">
              <img src={apple} alt="Apple Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-2" id="integracao">
        <h2 className="mt-5 pt-5 fs-1 text-light p-2">Integração com os principais portais</h2>
        <h4 className="mt-2 mb-5 fs-5 text-light fw-normal p-2">Anuncie seus imóveis e aumente a visibilidade de seu negócio!</h4>
        <div className="container text-center pb-5">
          <div className="row p-2">
            <div className="col mt-2">
              <img width="150px" src={expo} alt="Chave Fácil" />
            </div>
            <div className="col mt-2">
              <img width="200px" src={mercadolivre} alt="Mercado Livre" />
            </div>
            <div className="col mt-2">
              <img width="200px" src={ademi} alt="Ademi" />
            </div>
            <div className="col mt-2">
              <img width="100px" src={olx} alt="Olx" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img width="200px" src={vivareal} alt="Viva Real" />
            </div>
            <div className="col mt-2">
              <img width="130px" src={casamineira} alt="Casa Mineira" />
            </div>
            <div className="col mt-2">
              <img width="150px" src={chave} alt="Chave Fácil" />
            </div>
            <div className="col mt-2">
              <img width="100px" src={creci} alt="Portal Creci" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img width="150px" src={df} alt="DF Imóveis" />
            </div>
            <div className="col mt-2">
              <img width="200px" src={dreamcasa} alt="Dream Casa" />
            </div>
            <div className="col mt-2">
              <img width="150px" src={imoWeb} alt="ImoWEB" />
            </div>
            <div className="col mt-2">
              <img width="180px" src={lugarcerto} alt="Lugar Certo" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img width="200px" src={smartxml} alt="Smart XML" />
            </div>
            <div className="col mt-2">
              <img width="100px" src={zap} alt="Zap Imóveis" />
            </div>
            <div className="col mt-2">
              <img width="200px" src={moving} alt="Moving" />
            </div>
          </div>
        </div>
      </div>
      <div id="sites" className="bg-1 pb-5 pt-5">
        <div className="container d-flex justify-content-around align-items-center flex-sm-row flex-column">
          <div className="d-flex flex-column text-light text-start">
            <div>
              <h2 className="pt-5 text-bold fs-1 p-2">Site Gratuitos e Premium</h2>
              <h4 className="mt-2 mb-5 fs-3 text-light fw-normal p-2">Crie sua página com Layouts modernos e otimizados para gerar mais leads.</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img className="m-2" src={tempo} alt="Tempo" />
              <h5 className="m-4 fw-normal">Crie seu site profissional em menos de 5 minutos e comece a divulgá-lo na internet.</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img className="m-2" src={busca} alt="Busca" />
              <h5 className="m-4 fw-normal">Sua página otimizada para aparecer nos primeiros resultados do Google.</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img className="m-2" src={cel} alt="Smartphone" />
              <h5 className="m-4 fw-normal">Seu site responsivo e adaptado para todos os dispositivos (Smartphone, Computador e Tablet).</h5>
            </div>
          </div>
          <div className="site-img">
            <img src={site} alt="Site" />
          </div>
          <div>
          </div>
        </div>
      </div>
      <div id="clientes" className="clientes">
        <h2 className="mt-5 fs-1 color-1 p-2">O que nossos clientes dizem <i className="bi bi-arrow-down-left"></i></h2>
        <div className="container d-flex justify-content-center flex-sm-row flex-column">
          <div className="card">
            <img src={dimas} className="card-img-top p-5" alt="Dimas" />
            <div className="card-body">
              <h5 className="card-title fs-3">Dimas</h5>
              <h6 className="card-title fw-semibold">Diretor da Acelera Imobiliária</h6>
              <p className="card-text">Com o Smart tento uma plataforma moderna para gerenciar meus anúncios em vários portais, enviar material para cliente  e fazer acompanhamento, além de poder acessá-lo 24hs! Tudo na palma da mão!</p>
            </div>
          </div>
          <div className="card">
            <img src={valeria} className="card-img-top p-5" alt="Valéria" />
            <div className="card-body">
              <h5 className="card-title fs-3">Valéria</h5>
              <h6 className="card-title fw-semibold">Dimas Cruz e Valéria Lucena</h6>
              <p className="card-text">O Smart me proporciona atender meus clientes com velocidade, praticidade e profissionalismo! Consigo oferecer o mesmo atendimento dado por grandes imobiliárias! Tô muito satisfeita!</p>
            </div>
          </div>
          <div className="card">
            <img src={rogerio} className="card-img-top p-5" alt="Rogério" />
            <div className="card-body">
              <h5 className="card-title fs-3">Rogério</h5>
              <h6 className="card-title fw-semibold">Rio Lar imóveis</h6>
              <p className="card-text">Minha experiência com a Smart Imobiliário foi simplesmente fora do comum. qualidade e competência estas duas palavras traduzem o atendimento que a Smart emprega nos serviços que realiza, os quais faço questão de destacar.</p>
            </div>
          </div>
          <div className="card">
            <img src={conlar} className="card-img-top p-5" alt="Conlar" />
            <div className="card-body">
              <h5 className="card-title fs-3">Iris Anjo</h5>
              <h6 className="card-title fw-semibold">Conlar empreendimentos</h6>
              <p className="card-text">Estamos muito satisfeitos com o serviço da Smart Empreendimentos! Desde já, manifestamos aqui o nosso contentamento com a agilidade do sistema e profissionalismo da equipe. Esperamos continuar esta parceria, facilitando  nossa relação com nossos clientes. Parabéns!</p>
            </div>
          </div>
        </div>
      </div>

      <div id="migracao" className="pb-5 pt-5 mb-5">
        <h2 className="mt-5 fs-1 color-3 p-2">Faz parte de outro sistema e quer migrar para o Smart?</h2>
        <h4 className="mt-2 mb-5 fs-5 fw-normal p-2">Mude agora mesmo com o nosso assistente de importação de forma rápida.</h4>
        <div className="container">
          <img src={migrar} className="migracao" alt="Migracao" />
        </div>
      </div>
    </div>
  )
}

export default Content