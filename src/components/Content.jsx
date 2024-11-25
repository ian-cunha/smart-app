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
        <h1 className="fw-light">Sistema imobiliário completo com site de imóveis</h1>
        <h2 className="fw-normal fs-6">Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades.</h2>
        <h3>AUMENTE JÁ SUAS VENDAS <i className="bi bi-graph-up-arrow"></i></h3>
        <div className="d-flex justify-content-center align-items-center flex-sm-row flex-column">
          <button type="button" className="btn btn-whatsapp m-2 p-2" data-bs-toggle="modal" data-bs-target="#whatsappModal">
            <i className="bi bi-whatsapp"></i> Fale com um consultor
          </button>
          <a type="button" href="/Gratuito" className="btn btn-gratuito m-2 p-2">Plano Gratuito <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <section id="software" className="software-section">
        <div className="text-center p-4">
          <h2 className="mt-5 fs-1 color-1 p-2">Gestão inteligente de seus negócios</h2>
          <h4 className="mt-2 mb-5 fs-5 fw-normal p-2">
            Acesse seus imóveis e publique em portais em uma única plataforma.
          </h4>
        </div>

        <div className="container">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {[
              {
                src: grid1,
                alt: "Anúncio em Portais",
                title: "Anúncio em Portais",
                description: "Integre automaticamente seus imóveis com portais imobiliários."
              },
              {
                src: grid2,
                alt: "Site de Imóveis",
                title: "Site de Imóveis",
                description: "Divulgue seus imóveis em seu próprio site."
              },
              {
                src: grid3,
                alt: "Funil de Vendas",
                title: "Funil de Vendas",
                description: "Controle a jornada de venda do seu imóvel, em tempo real."
              },
              {
                src: grid4,
                alt: "Atendimento a Clientes",
                title: "Atendimento a Clientes",
                description: "Contato direto com o cliente via WhatsApp, através do número cadastrado no sistema."
              },
              {
                src: grid5,
                alt: "Gestão de Imóveis",
                title: "Gestão de Imóveis",
                description: "Tenha cadastros ilimitados e acesso a todos os seus imóveis em uma única plataforma."
              },
              {
                src: grid6,
                alt: "Realize Parcerias",
                title: "Realize Parcerias",
                description: "Amplie sua rede de negócios online, encontrando parceiros da sua região."
              },
              {
                src: grid7,
                alt: "Detetive Imobiliário",
                title: "Detetive Imobiliário",
                description: "Encontre o match ideal entre clientes interessados e suas captações de imóveis."
              },
              {
                src: grid8,
                alt: "Painel de Controle",
                title: "Painel de Controle",
                description: "Visualize oportunidades de negócios e fases de venda, atenda com agilidade seus clientes, entre outras facilidades."
              },
              {
                src: grid9,
                alt: "Roteiro de Visitas",
                title: "Roteiro de Visitas",
                description: "Acompanhe como foram as visitas aos imóveis e o feedback dos clientes."
              },
              {
                src: grid10,
                alt: "Feedback ao Proprietário",
                title: "Feedback ao Proprietário",
                description: "Relacionamento com os proprietários através de informações completas e automáticas do processo de venda."
              },
              {
                src: grid11,
                alt: "Compartilha Imóveis",
                title: "Compartilha Imóveis",
                description: "Compartilhe imóveis compatíveis com interesse de seu cliente via WhatsApp e email."
              }
            ].map((item, index) => (
              <div key={index} className="col">
                <article className="text-center">
                  <img src={item.src} className="img-fluid img-grid mb-2" alt={item.alt} />
                  <h6 className="grid-color mt-2 fs-6">{item.title}</h6>
                  <p className="grid-p fs-7">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container" id="aplicativo">
        <h2 className="mt-5 fs-1 color-1 p-2">Aplicativo para Corretores e Imobiliárias</h2>
        <h4 className="mt-2 mb-5 fs-5 p-2 fw-normal">Baixe o aplicativo RE.AI.s e tenha todas as informações dos seus imóveis.</h4>
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

      <section className="bg-2 text-center text-light" id="integracao">
        <div className="py-5">
          <h2 className="fs-1 p-2">Integração com os principais portais</h2>
          <h4 className="fs-5 fw-normal p-2">
            Anuncie seus imóveis e aumente a visibilidade de seu negócio!
          </h4>
        </div>

        <div className="container pb-5">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
            {[
              { src: expo, alt: "Chave Fácil" },
              { src: mercadolivre, alt: "Mercado Livre" },
              { src: ademi, alt: "Ademi" },
              { src: olx, alt: "OLX" },
              { src: vivareal, alt: "Viva Real" },
              { src: casamineira, alt: "Casa Mineira" },
              { src: chave, alt: "Chave Fácil" },
              { src: creci, alt: "Portal CRECI" },
              { src: df, alt: "DF Imóveis" },
              { src: dreamcasa, alt: "Dream Casa" },
              { src: imoWeb, alt: "ImoWEB" },
              { src: lugarcerto, alt: "Lugar Certo" },
              { src: smartxml, alt: "Smart XML" },
              { src: zap, alt: "Zap Imóveis" },
              { src: moving, alt: "Moving" }
            ].map((portal, index) => (
              <div key={index} className="col">
                <img
                  className="portais img-fluid"
                  src={portal.src}
                  alt={portal.alt}
                  title={portal.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sites" className="bg-1 py-5">
        <div className="container d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center">
          <div className="text-light text-start">
            <h2 className="fs-1 p-2">Sites Gratuitos e Premium</h2>
            <h4 className="fs-4 fw-normal mb-4 p-2">
              Crie sua página com layouts modernos e otimizados para gerar mais leads.
            </h4>
            <div className="d-flex align-items-start mb-3">
              <img className="me-3" src={tempo} alt="Tempo" />
              <p className="fs-5">
                Crie seu site profissional em menos de 5 minutos e comece a divulgá-lo na internet.
              </p>
            </div>
            <div className="d-flex align-items-start mb-3">
              <img className="me-3" src={busca} alt="Busca" />
              <p className="fs-5">
                Sua página otimizada para aparecer nos primeiros resultados do Google.
              </p>
            </div>
            <div className="d-flex align-items-start">
              <img className="me-3" src={cel} alt="Smartphone" />
              <p className="fs-5">
                Seu site responsivo e adaptado para todos os dispositivos (smartphones, computadores e tablets).
              </p>
            </div>
          </div>
          <div className="site-img mb-4 mb-lg-0">
            <img className="img-fluid" src={site} alt="Site" />
          </div>
        </div>
      </section>

      <section id="clientes" className="clientes py-5">
        <div className="container text-center">
          <h2 className="fs-1 color-1 p-2">
            O que nossos clientes dizem <i className="bi bi-arrow-down-left"></i>
          </h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                src: dimas,
                name: "Dimas",
                title: "Diretor da Acelera Imobiliária",
                feedback:
                  "Com o RE.AI.s tenho uma plataforma moderna para gerenciar meus anúncios em vários portais, enviar material para clientes e fazer acompanhamento, além de acessá-lo 24h! Tudo na palma da mão!"
              },
              {
                src: valeria,
                name: "Valéria",
                title: "Dimas Cruz e Valéria Lucena",
                feedback:
                  "O RE.AI.s me proporciona atender meus clientes com velocidade, praticidade e profissionalismo! Consigo oferecer o mesmo atendimento dado por grandes imobiliárias! Estou muito satisfeita!"
              },
              {
                src: rogerio,
                name: "Rogério",
                title: "Rio Lar Imóveis",
                feedback:
                  "Minha experiência com o RE.AI.s foi simplesmente fora do comum. Qualidade e competência traduzem o atendimento e os serviços realizados, que faço questão de destacar."
              },
              {
                src: conlar,
                name: "Iris Anjo",
                title: "Conlar Empreendimentos",
                feedback:
                  "Estamos muito satisfeitos com o serviço da RE.AI.s! Manifestamos nosso contentamento com a agilidade do sistema e o profissionalismo da equipe. Esperamos continuar essa parceria!"
              }
            ].map((client, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <img src={client.src} className="card-img-top p-4" alt={client.name} />
                  <div className="card-body">
                    <h5 className="card-title fs-3">{client.name}</h5>
                    <h6 className="card-title fw-semibold">{client.title}</h6>
                    <p className="card-text">{client.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="migracao" className="py-5">
        <div className="container text-center">
          <h2 className="fs-1 color-3 p-2">
            Faz parte de outro sistema e quer migrar para o RE.AI.s?
          </h2>
          <h4 className="fs-5 fw-normal mb-4 p-2">
            Mude agora mesmo com o nosso assistente de importação de forma rápida.
          </h4>
          <div className="d-flex justify-content-center">
            <img src={migrar} className="img-fluid migracao" alt="Migração" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Content