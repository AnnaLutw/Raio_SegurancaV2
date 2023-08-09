import './App.css';
import Footer from './componentes/footer';
import Inicio from './componentes/inicio';
import NavBar from './componentes/navbar';
import ServicoEngenharia from './componentes/servicoEngenharia';
import Servicos from './componentes/servicos';
import Slider from './componentes/slider';
import Topico from './componentes/topicos';


function App() {

  const servicos=[
  {
    nome: 'Manutenção Predial',
    descricao: 'Garantimos a conservação, segurança e funcionamento adequado do seu edificio ou complexo predial. Proporcionamos um ambiente seguro e confortavel para seus ocupantes. ',
    img: '/imagens/predial.jpg'
  },
  {
    nome: 'Portaria',
    descricao: 'Garantimos o controle de acesso do seu estabelecimento com profissionais devidamente qualificados, garantindo a satisafação dos usuarios e o bom funcionamento do local.',
    img: '/imagens/recepcao.jpg'
  },
  {
    nome: 'Segurança e Vigilância',
    descricao: 'Mantemos a integridade e a segurança de pessoas, propriedades e ativos em diversos ambientes com profissionais devidamente treinados e qualificados para situações de emergencia.',
    img: '/imagens/seguranças.jpg'
  },
  {
    nome: 'Sistema de monitoramento de câmeras',
    descricao: 'Entregamos uma solução de segurança que utiliza câmeras de vigilancia para monitorar e gravar atividades em locais especificos, identificando ocorrências suspeitas e garantindo sua segurança e da sua empresa.',
    img: '/imagens/cameras.jpg'
  }
];
  return (
    <div className="App">
      
      <NavBar/>
      <Inicio/>
      <Topico/>
      <Slider/>
      <Servicos servicos={servicos} />
      <ServicoEngenharia/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
