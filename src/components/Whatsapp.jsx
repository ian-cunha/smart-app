function Whatsapp() {
  return (
    <div>
      <button type="button" data-bs-toggle="modal" data-bs-target="#whatsappModal" className="wpp-button">
        <i className="bi bi-whatsapp"></i>
      </button>

      <div className="modal fade" id="whatsappModal" tabIndex="-1" aria-labelledby="whatsappModalLabal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" target="_blank" action="https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline">

                <input type="hidden" name="url_origem" value="https://www.smartimobiliario.com.br" />
                <input type="hidden" name="id_empresa" value="7341" />
                <input type="hidden" name="id_empreendimento" value="" />
                <input type="hidden" name="tipo_origem" value="3" />
                <input type="hidden" name="id_outra_origem" value="5" />
                <input type="hidden" name="id_detalhe_outra_origem" value="820" />
                <input type="hidden" name="tipo_de_interesse" value="0" />
                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button type="submit" className="btn btn-submit btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatsapp