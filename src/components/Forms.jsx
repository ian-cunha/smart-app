import axios from 'axios';
import React, { useState } from 'react';

function Forms() {

  const [nome_contato, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [id_empreendimento, setEmpreendimento] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: 'https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline',
      data: {
        nome_contato,
        email,
        telefone,
        id_empreendimento,
        url_origem: "https://www.smartimobiliario.com.br",
        id_empresa: 7341,
        tipo_origem: 3,
        id_outra_origem: 5,
        id_detalhe_outra_origem: 820,
        tipo_de_interesse: 0,
        idAcao: 0,
        mensagem: "Quero ter mais informações."
      }
    })
      .then(function (response) {
        alert("Enviado, aguarde nosso contato!")
        console.log(response.data);
        console.log("Plano:", id_empreendimento, "/", "Nome:", nome_contato, "/", "Email:", email, "Telefone:", telefone, "=", "Contato Enviado com sucesso!")
      });
  }

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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65079} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65081} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65082} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65083} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65085} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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
              <form name="formContato" onSubmit={handleSubmit}>

                <fieldset>
                  <div>
                    <label htmlFor="contatoNome" className="form-label text-light">Nome</label>
                    <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control form-control-lg" name="nome_contato" id="contatoNome" required placeholder="Nome" />
                  </div>
                  <div>
                    <label htmlFor="contatoEmail" className="form-label text-light">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg" name="email" id="contatoEmail" required placeholder="E-mail" />
                  </div>
                  <div>
                    <label htmlFor="contatoTelefone" className="form-label text-light">Whatsapp</label>
                    <input onChange={(e) => setTelefone(e.target.value)} type="tel" maxLength="11" className="form-control form-control-lg" name="telefone" id="contatoTelefone" required placeholder="Whatsapp" />
                  </div>
                  <button value={65085} onClick={(e) => setEmpreendimento(e.target.value)} type="submit" className="btn btn-orange btn-lg w-100 mt-4">Quero saber mais! <i className="bi bi-arrow-right-circle"></i></button>
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