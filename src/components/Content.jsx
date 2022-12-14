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
import Whatsapp from "./Whatsapp";

function Content() {
  return (
    <div id="home">

      <Whatsapp />

      <div className="content text-light">
        <h1 className="fw-bold">Sistema imobili??rio completo com site de im??veis</h1>
        <h2 className="fw-normal fs-5">Criado para ajudar voc?? a priorizar neg??cios, acompanhar seu desempenho e n??o perder oportunidades.</h2>
        <h3>AUMENTE J?? SUAS VENDAS <i className="bi bi-graph-up-arrow"></i></h3>
        <div className="d-flex justify-content-center align-items-center flex-sm-row flex-column">
          <button type="button" className="btn btn-whatsapp m-2 p-2" data-bs-toggle="modal" data-bs-target="#whatsappModal">
            <i className="bi bi-whatsapp"></i> Fale com um consultor
          </button>
          <a type="button" href="/Gratuito" className="btn btn-gratuito m-2 p-2">Plano Gratuito <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div id="software">
        <h2 className="mt-5 fs-1 color-1 p-2">Gest??o inteligente de seus neg??cios</h2>
        <h4 className="mt-2 mb-5 fs-5 fw-normal p-2">Acesse seus im??veis e publique em portais em uma ??nica plataforma.</h4>
        <div className="container text-center">
          <div className="row p-2">
            <div className="col mt-2">
              <img src={grid1} alt="An??ncio em Portais" />
              <h6 className="grid-color mt-2">An??ncio em Portais</h6>
              <p>Integre automaticamente seus im??veis com portais imobili??rios.</p>
            </div>
            <div className="col mt-2">
              <img src={grid2} alt="Site de Im??veis" />
              <h6 className="grid-color mt-2">Site de Im??veis</h6>
              <p>Divulgue seus im??veis em seu pr??prio site.</p>
            </div>
            <div className="col mt-2">
              <img src={grid3} alt="Funil de vendas" />
              <h6 className="grid-color mt-2">Funil de vendas</h6>
              <p>Controle a jornada de venda do seu im??vel, em tempo real.</p>
            </div>
            <div className="col mt-2">
              <img src={grid4} alt="Atendimento a Clientes" />
              <h6 className="grid-color mt-2">Atendimento a Clientes</h6>
              <p>Contato direto com o cliente via WhatsApp, atrav??s do n??mero cadastrado no sistema.</p>
            </div>
            <div className="col mt-2">
              <img src={grid5} alt="Gest??o de Im??veis" />
              <h6 className="grid-color mt-2">Gest??o de Im??veis</h6>
              <p>Tenha cadastros ilimitados e acesso a todos os seus im??veis em uma ??nica plataforma.</p>
            </div>
            <div className="col mt-2">
              <img src={grid6} alt="Realize Parcerias" />
              <h6 className="grid-color mt-2">An??ncio em Portais</h6>
              <p>Amplie sua rede de neg??cios online, encontrando parceiros da sua regi??o.</p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img src={grid7} alt="Detetive Imobili??rio" />
              <h6 className="grid-color mt-2">Detetive Imobili??rio</h6>
              <p>Encontre o match ideal entre clientes interessados e suas capta????es de im??veis.</p>
            </div>
            <div className="col mt-2">
              <img src={grid8} alt="Painel de Controle - Dashboard" />
              <h6 className="grid-color mt-2">Painel de Controle - Dashboard</h6>
              <p>Visualize oportunidades de neg??cios e fases de venda, atenda com agilidade seus clientes, entre outras facilidades</p>
            </div>
            <div className="col v">
              <img src={grid9} alt="Roteiro de Visitas" />
              <h6 className="grid-color mt-2">Roteiro de Visitas</h6>
              <p>Acompanhe como foram as visitas aos im??veis e o feedback dos clientes.</p>
            </div>
            <div className="col mt-2">
              <img src={grid10} alt="Feedback ao Propriet??rio" />
              <h6 className="grid-color mt-2">Feedback ao Propriet??rio</h6>
              <p>Relacionamento com os propriet??rios atrav??s de informa????es completas e autom??ticas do processo de venda.</p>
            </div>
            <div className="col mt-2">
              <img src={grid11} alt="Compartilha Im??veis" />
              <h6 className="grid-color mt-2">Compartilha Im??veis</h6>
              <p>Compartilhe im??veis compat??veis com interesse de seu cliente via whatsapp e email.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="aplicativo">
        <h2 className="mt-5 fs-1 color-1 p-2">Aplicativo para Corretores e Imobili??rias</h2>
        <h4 className="mt-2 mb-5 fs-5 p-2 fw-normal">Baixe o aplicativo SMART e tenha todas as informa????es dos seus im??veis.</h4>
        <div className="container">
          <div className="row m-5 text-center">
            <img src={smartphone} alt="Smartphone" />
          </div>
          <div className="d-flex flex-sm-row flex-column justify-content-center">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario">
              <img className="m-1" width='200px' src={googleplay} alt="Google Play" />
            </a>
            <a target="_blank" href="https://apps.apple.com/br/app/smart-imobiliario/id1128234098">
              <img className="m-1" width='200px' src={apple} alt="Apple Store" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-2" id="integracao">
        <h2 className="mt-5 pt-5 fs-1 text-light p-2">Integra????o com os principais portais</h2>
        <h4 className="mt-2 mb-5 fs-5 text-light fw-normal p-2">Anuncie seus im??veis e aumente a visibilidade de seu neg??cio!</h4>
        <div className="container text-center pb-5">
          <div className="row p-2">
            <div className="col mt-2">
              <img className="portais" src={expo} alt="Chave F??cil" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={mercadolivre} alt="Mercado Livre" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={ademi} alt="Ademi" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={olx} alt="Olx" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img className="portais" src={vivareal} alt="Viva Real" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={casamineira} alt="Casa Mineira" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={chave} alt="Chave F??cil" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={creci} alt="Portal Creci" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img className="portais" src={df} alt="DF Im??veis" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={dreamcasa} alt="Dream Casa" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={imoWeb} alt="ImoWEB" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={lugarcerto} alt="Lugar Certo" />
            </div>
          </div>
          <div className="row p-2">
            <div className="col mt-2">
              <img className="portais" src={smartxml} alt="Smart XML" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={zap} alt="Zap Im??veis" />
            </div>
            <div className="col mt-2">
              <img className="portais" src={moving} alt="Moving" />
            </div>
          </div>
        </div>
      </div>
      <div id="sites" className="bg-1 pb-5 pt-5">
        <div className="container d-flex justify-content-around align-items-center flex-sm-row flex-column">
          <div className="d-flex flex-column text-light text-start">
            <div>
              <h2 className="pt-5 text-bold fs-1 p-2">Site Gratuitos e Premium</h2>
              <h4 className="mt-2 mb-5 fs-3 text-light fw-normal p-2">Crie sua p??gina com Layouts modernos e otimizados para gerar mais leads.</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img className="m-2" src={tempo} alt="Tempo" />
              <h5 className="m-4 fw-normal">Crie seu site profissional em menos de 5 minutos e comece a divulg??-lo na internet.</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img className="m-2" src={busca} alt="Busca" />
              <h5 className="m-4 fw-normal">Sua p??gina otimizada para aparecer nos primeiros resultados do Google.</h5>
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
              <h6 className="card-title fw-semibold">Diretor da Acelera Imobili??ria</h6>
              <p className="card-text">Com o Smart tento uma plataforma moderna para gerenciar meus an??ncios em v??rios portais, enviar material para cliente  e fazer acompanhamento, al??m de poder acess??-lo 24hs! Tudo na palma da m??o!</p>
            </div>
          </div>
          <div className="card">
            <img src={valeria} className="card-img-top p-5" alt="Val??ria" />
            <div className="card-body">
              <h5 className="card-title fs-3">Val??ria</h5>
              <h6 className="card-title fw-semibold">Dimas Cruz e Val??ria Lucena</h6>
              <p className="card-text">O Smart me proporciona atender meus clientes com velocidade, praticidade e profissionalismo! Consigo oferecer o mesmo atendimento dado por grandes imobili??rias! T?? muito satisfeita!</p>
            </div>
          </div>
          <div className="card">
            <img src={rogerio} className="card-img-top p-5" alt="Rog??rio" />
            <div className="card-body">
              <h5 className="card-title fs-3">Rog??rio</h5>
              <h6 className="card-title fw-semibold">Rio Lar im??veis</h6>
              <p className="card-text">Minha experi??ncia com a Smart Imobili??rio foi simplesmente fora do comum. qualidade e compet??ncia estas duas palavras traduzem o atendimento que a Smart emprega nos servi??os que realiza, os quais fa??o quest??o de destacar.</p>
            </div>
          </div>
          <div className="card">
            <img src={conlar} className="card-img-top p-5" alt="Conlar" />
            <div className="card-body">
              <h5 className="card-title fs-3">Iris Anjo</h5>
              <h6 className="card-title fw-semibold">Conlar empreendimentos</h6>
              <p className="card-text">Estamos muito satisfeitos com o servi??o da Smart Empreendimentos! Desde j??, manifestamos aqui o nosso contentamento com a agilidade do sistema e profissionalismo da equipe. Esperamos continuar esta parceria, facilitando  nossa rela????o com nossos clientes. Parab??ns!</p>
            </div>
          </div>
        </div>
      </div>

      <div id="migracao" className="pb-5 pt-5 mb-5">
        <h2 className="mt-5 fs-1 color-3 p-2">Faz parte de outro sistema e quer migrar para o Smart?</h2>
        <h4 className="mt-2 mb-5 fs-5 fw-normal p-2">Mude agora mesmo com o nosso assistente de importa????o de forma r??pida.</h4>
        <div className="container">
          <img src={migrar} className="migracao" alt="Migracao" />
        </div>
      </div>
    </div>
  )
}

export default Content