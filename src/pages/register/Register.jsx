import {useRef} from "react";
import {useState} from "react";
import "./register.scss";

export default function Register(){
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

    return(
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginButton">Assinar</button>
                </div>
            </div>

            <div className="container">
                <h1>Filmes Inlimitados, Séries, e muito mais</h1>
                <h2>Veja em qualquer lugar. Cancela a qualquer momento</h2>

                <p>
                    Pronto para Assistir? Entre aqui com seu email para criar ou resetar a sua assinatura. 
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Endereço do Email" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>
                            Comece já 
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>
                            Começa 
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}