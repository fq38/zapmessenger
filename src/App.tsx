import Footer from "components/Footer";
import NavBar from "./components/NavBar";
import zapisider from './assets/img/zapisider.jpg'
import HypeLink from "components/HypeLink";

function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <h1 className="text-primary">zapmessenger</h1>
      <p>Zap Messenger é um aplicativo gratuito para a troca de mensagens disponível para Android e outras plataformas. Zapi Zap Messenger utiliza a sua conexão com a Internet para enviar mensagens e fazer chamadas para seus amigos e familiares. Mude do SMS para Mensagens instantâneas para enviar e receber mensagens, chamadas, fotos, vídeos, documentos e Mensagens de Voz. Mensagens instantâneas seguras e criptografadas baseado em nuvem.</p>
      <img src={zapisider} alt="zapmessenger" width="1000" height="500" />
      <h2>Por que usar o Zapi Zap Messenger?</h2>

      <p>Crie seu grupo ou canal, ganhe um site próprio e ainda ganhe $$$ dinheiro com ele</p>
<p>Mais leve, funcional e seguro que os aplicativos da concorrência.</p>
<p>Permite criação de grupos de contatos personalizados pelo usuário.</p>
<p>Oferece gravação por mensagem de voz</p>
<p>Permite o envio de qualquer arquivo ou documento de até 1,5 GB.</p>
<p>Com recursos de envio de fotos, vídeos, localização, contato e áudio (mensagem de voz)</p>
<p>Sistema de criptografia que melhora a segurança dos dados pela rede.</p>
<p>Grupos de até 20.000 membros</p>
<p>Chamadas de voz gratuitas e criptografadas</p>
<p>Personalize o app de acordo com as cores que desejar</p>
<p>Você navega a vontade sem compartilhar seu número telefone</p>
<p>Permite interação em conversas secretas entre usuários que são deletadas conforme tempo estimado para detonação. 100% seguro e secreto.</p>
<p>Rede social exclusiva</p>
<p>Envio/Recebimento de mensagens anônimas</p>
<p>Mais de 150 mil grupos e canais para você se divertir</p>

<p>ZapiZap Messenger é um aplicativo de mensagens que usa a API do Telegram.</p>


<HypeLink/>

      
      
    </div>
    <Footer/>
    </>
    
  );
  
}

export default App;
