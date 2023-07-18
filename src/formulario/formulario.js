import './formulario.css'
import {Link} from 'react-router-dom'

export default function Formulario(){
    return(
        <div className="formulario-fundo">
                <div className='div-link'>
                    <Link className='link' to='/'><p>Voltar à página inicial</p></Link>
                </div>
            <form>
                <div className="formulario-topo">
                    <img src='assets/imagens/aviao.png' alt='aviao'/>
                    <p>Solicite um orçamento</p>
                </div>
                <div className='formulario-container'>
                    <h1>Informe seus dados</h1>
                    <div className="formulario-item">
                        <label for='nome'>Nome</label>
                        <input id='nome' type="text" placeholder="Nome completo"/>
                    </div>
                    <div className="formulario-item">
                        <label for='email'>Email</label>
                        <input id='email' type="email" placeholder="Email para contato"/>
                    </div>
                    <div className="formulario-item">
                        <label for='celular'>Celular</label>
                        <input id='celular' type="text" placeholder="(xx) xxxxx-xxxx"/>
                    </div>
                    <div className="formulario-item-dobrado">
                        <div className="formulario-item-metade">
                            <label for='ida'>Data de ida</label>
                            <input id="ida" type="date"/>
                        </div>
                        <div className="formulario-item-metade">
                            <label for='volta'>Data de volta</label>
                            <input id='volta' type='date'/>
                        </div>
                    </div>
                    <div className="formulario-item-dobrado">
                        <div className="formulario-item-metade">
                            <label for='origem'>Origem</label>
                            <select id='origem'>
                                <option selected>Partindo de</option>
                                <option value='AM'>Amazonas</option>
                                <option value='RJ'>Rio de janeiro</option>
                                <option value='SP'>São Paulo</option>
                                <option value='GO'>Goiás</option>
                                <option value='MA'>Maranhão</option>
                            </select> 
                        </div>
                        <div className="formulario-item-metade">
                        <label for='destino'>Destino</label>
                            <select id='destino'>
                                <option selected>Indo para</option>
                                <option value='AM'>Amazonas</option>
                                <option value='RJ'>Rio de janeiro</option>
                                <option value='SP'>São Paulo</option>
                                <option value='GO'>Goiás</option>
                                <option value='MA'>Maranhão</option>
                            </select>
                        </div>
                    </div>
                    <div className="formulario-item-opcoes">
                        <div className="formulario-item-opcoes-item-titulo">
                            <p>Quarto com cama infantil?</p>
                        </div>
                        <div className="formulario-item-opcoes-itens">
                            <div className="opcoes">
                                <input type="radio" value='s' id='crianca-sim'/>
                                <label for='crianca-sim'>Sim</label>
                            </div>
                            <div className="opcoes">
                                <input type="radio" value='n' id='crianca-nao'/>
                                <label for='crianca-nao'>Não</label>
                            </div>
                        </div>
                    </div>
                    <div className="formulario-item-opcoes">
                        <div className="formulario-item-opcoes-item-titulo">
                            <p>Preferências da hospedagem</p>
                        </div>
                        <div className="formulario-item-opcoes-itens">
                            <div className="opcoes">
                                <input type="checkbox" value='piscina' id='piscina'/>
                                <label for='piscina'>Piscina</label>
                            </div>
                            <div className="opcoes">
                                <input type="checkbox" value='wifi' id='wifi'/>
                                <label for='wifi'>Wi-Fi</label>
                            </div>
                            <div className="opcoes">
                                <input type="checkbox" value='garagem' id='garagem'/>
                                <label for='garagem'>Garagem</label>
                            </div>
                            <div className="opcoes">
                                <input type="checkbox" value='suite' id='suite'/>
                                <label for='seuite'>Suite</label>
                            </div>
                        </div>
                    </div>
                    <div className="formulario-item">
                        <button type='submit'>Solicitar orçamento</button>
                    </div>
                </div>
            </form>
        </div>
    )
}