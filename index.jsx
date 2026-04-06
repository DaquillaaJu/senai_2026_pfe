import {useState} from 'react';
import {Link} from "react-router-dom";
import "./login.css";
// import imgEstacao from '../../assets/estacao.jpg' 

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return(
    <section className="login-container">
        <div className="login-box">

            <div className="login-header">
                <h2>Login</h2>
            </div>

            <form className="login-form">

                <div className="input-group">
                    <label htmlFor="usuario">Usuário</label>

                    <input 
                    type="text"
                    id="usuario"
                    value={usuario} 
                    onChange={(e)=> setUsuario(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="senha">Senha</label>

                    <input 
                    type="password"
                    id="senha"
                    value={senha} 
                    onChange={(e)=> setSenha(e.target.value)}
                    />
                </div>

                <button className="login-button">
                    Entrar
                </button>

                <Link to="/" className="voltar">
                    Voltar
                </Link>

            </form>

        </div>
    </section>
)





        // <section>
        //     <div>
        //         <div>
        //      {/* <img src={imgEstacao} alt=""/> */}
        //         </div>
        //         <div>
        //             <h2>Login</h2>
        //             <form action="">
        //                 <input type="text" id="usuario" 
        //                 value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
        //                 <label htmlFor="usuario">Usuário</label>
        //                 <input type="password" id="senha" 
        //                 value={senha} onChange={(e) => setSenha(e.target.value)}/>
        //                 <label htmlFor="senha">Senha</label>
        //                 <Link to="/"></Link>
        //             </form>
        //         </div>
        //     </div>
        // </section>


        
    
}