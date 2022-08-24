function Forms() {
  return (
    <div>

      <div className="modal fade" id="autonomo" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="micro" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="pequeno" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="medio" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="grande" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
                  <p className="mt-2 fw-light"><i className="bi bi-shield-check"></i> Garantimos a privacidade de seus dados</p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="gratuito" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="whatsappModalLabal"><i className="bi bi-person-lines-fill"></i> Fale com um consultor</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form name="formContato" method="post" action="/">

                <input type="hidden" name="idAcao" value="0" />
                <input type="hidden" name="mensagem" id="mensagem" value="Quero ter mais informações." />
                <input type="hidden" id="codigo-anuncio" value="" />

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
                  <button type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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

export default Forms