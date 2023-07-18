import './principal.css'
import {Link} from 'react-router-dom'

export default function Principal(){
    return(
        <section>
            <div className='div-titulos'>
                <h2>Ofertas</h2>
                <p>Com até 50% de desconto</p>
            </div>
            <div className='div-maior-1'>
                <div className='div-media-rj'>
                    <Link className='link' to='/formulario'>Rio de Janeiro</Link>
                </div>
                <div className='div-media-quatro'>
                    <div className='div-menor'>
                        <Link className='link' to='formulario'>Manaus</Link>
                    </div>
                    <div className='div-menor'>
                        <Link className='link' to='formulario'>São Paulo</Link>
                    </div>
                    <div className='div-menor'>
                        <Link className='link' to='formulario'>Rio de Janeiro</Link>
                    </div>
                    <div className='div-menor'>
                        <Link className='link' to='formulario'>Maranhão</Link>
                    </div>
                </div>
            </div>
            <div className='div-titulos'>
                <h2>Explore a natureza</h2>
                <p>viaje conosco e veja o melhor que a natureza tem a oferecer</p>
            </div>
            <div className='div-maior-2'>
                <div className='div-media'>
                    <img src='assets/imagens/lencol.jpg' alt='sla'/>
                    <div className='perdi-a-criatividade-pra-nome-de-classe'>
                        <p className='p-prin'>Lençois Maranhenses, Brasil</p>
                        <p className='p-sec'>ida e volta a partir de R$79</p>
                    </div>
                </div>
                <div className='div-media'>
                    <img src='assets/imagens/goias.jpg' alt='sla'/>
                    <div className='perdi-a-criatividade-pra-nome-de-classe'>
                        <p className='p-prin'>Cachoeira Santa Bárbara, Brasil</p>
                        <p className='p-sec'>ida e volta a partir de R$139</p>
                    </div>
                </div>
            </div>
        </section>
    )
}