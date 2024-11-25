import NavSec from '../components/NavSec';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import Valores from '../components/Valores';

const planos = ['Gratuito', 'Autônomo', 'Micro', 'Pequeno', 'Médio', 'Grande'];

const funcionalidades = [
  { titulo: 'Número de Usuários', valores: ['1', '1', '3', '5', '10', '20'] },
  { titulo: 'Cadastro de Imóveis', valores: Array(6).fill(true) },
  { titulo: 'Cadastro de Clientes', valores: Array(6).fill(true) },
  { titulo: 'Imóveis Ativos', valores: ['50', '200', '400', 'Ilimitado', 'Ilimitado', 'Ilimitado'] },
  { titulo: 'CRM Completo', valores: [false, true, true, true, true, true] },
  { titulo: 'Integração com Portais Imobiliários', valores: [false, true, true, true, true, true] },
  { titulo: 'Compartilhamento em Redes Sociais', valores: Array(6).fill(true) },
  { titulo: 'APP Mobile', valores: Array(6).fill(true) },
  { titulo: 'Site Modelo Básico', valores: Array(6).fill(true) },
  { titulo: 'Site Modelo Premium', valores: [false, true, true, true, true, true] },
  { titulo: 'Imóveis de Construtoras', valores: [false, true, true, true, true, true] },
  { titulo: 'Material online para treinamentos', valores: [false, true, true, true, true, true] },
  { titulo: 'Atendimento por WhatsApp', valores: [false, true, true, true, true, true] },
  { titulo: 'Parametrização e configuração da conta', valores: [false, true, true, true, true, true] },
  { titulo: 'Treinamentos das equipes de vendas e gerentes', valores: [false, true, true, true, true, true] },
];

const renderIcon = (status) => (
  status ? <i className="bi bi-check2 text-primary"></i> : <i className="bi bi-x text-danger"></i>
);

const TabelaPlanos = () => (
  <div className="table-responsive">
    <table className="table text-center">
      <thead>
        <tr>
          <th></th>
          {planos.map((plano, index) => (
            <th key={index}>{plano}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {funcionalidades.map((func, index) => (
          <tr key={index}>
            <th scope="row" className="text-start">{func.titulo}</th>
            {func.valores.map((valor, i) => (
              <td key={i}>{typeof valor === 'boolean' ? renderIcon(valor) : valor}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function Planos() {
  return (
    <div>
      <NavSec />
      <Whatsapp />
      <div className="planos">
        <div className="container mt-5 pt-5 text-center">
          <h2 className="fs-1">Planos</h2>
          <h3 className="fs-5 fw-normal">Escolha o plano ideal para deixar o seu negócio mais inteligente</h3>
        </div>

        <Valores />

        <div className="container">
          <h2 id="detalhes-plano" className="fs-1 text-center mb-4 texto-1">Compare os planos</h2>
          <TabelaPlanos />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Planos;
