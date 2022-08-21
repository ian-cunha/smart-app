function Content() {
  return (
    <div>
      <div className="content text-light">
        <h1 className="fw-bold">Sistema imobiliário completo com site de imóveis</h1>
        <h2 className="fw-semibold fs-5">Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades</h2>
        <h3>AUMENTE JÁ SUAS VENDAS <i class="bi bi-graph-up-arrow"></i></h3>
        <div className="d-flex justify-content-center align-items-center flex-sm-row flex-column">
          <a type="button" href="/" class="btn btn-whatsapp m-2 p-2"><i class="bi bi-whatsapp"></i> Fale com um consultor</a>
          <a type="button" href="/Gratuito" class="btn btn-gratuito m-2 p-2">Plano Gratuito <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div id="software" className="software">
        <h4>Software</h4>
      </div>
      <div id="sites" className="sites">
        <h4>Sites</h4>
      </div>
      <div id="clientes" className="clientes">
        <h4>Clientes</h4>
      </div>
    </div>
  )
}

export default Content