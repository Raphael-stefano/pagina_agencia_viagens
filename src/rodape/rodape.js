import './rodape.css'

export default function Rodape(){
    return(
        <footer>
            <div className='footer-container'>
                <h2>Contato</h2>
                <div className='footer-item'>
                    <img src='assets/imagens/local.png' alt='img'/>
                    <p>Rio de janeiro - RJ</p>
                </div>
                <div className='footer-item'>
                    <img src='assets/imagens/telefone.png' alt='img'/>
                    <p>telefone (21) 99999-9999</p>
                </div>
                <div className='footer-item'>
                    <img src='assets/imagens/email.png' alt='img'/>
                    <p>Email: contato@agencia.com.br</p>
                </div>
            </div>
            <div className='footer-container'>
                <h2>Nossas redes sociais</h2>
                <div className='footer-item'>
                    <img src='assets/imagens/fb.png' alt='img'/>
                    <p>/AgenciaDeViagem</p>
                </div>
                <div className='footer-item'>
                    <img src='assets/imagens/ig.png' alt='img'/>
                    <p>@AgenciaDeViagem</p>
                </div>
                <div className='footer-item'>
                    <img src='assets/imagens/tt.png' alt='img'/>
                    <p>@AgenciaDeViagem</p>
                </div>
            </div>
        </footer>
    )
}