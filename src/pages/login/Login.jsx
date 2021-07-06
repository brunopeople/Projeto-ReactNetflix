import "./login.scss";

export default function Login(){
    return(
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Assinar</h1>
                    <input type="email" placeholder="Email ou Telefone" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Assinar</button>

                    <span>
                        Novo no Netflix? <b>Assine Já.</b>
                    </span>
                    <small>
                        Esta Pagina é protegida por Google reCAPTCHA para assegurar que você não é um bot. <b>Aprenda mais</b>
                    </small>
                </form>
            </div>
        </div>
    );
}

