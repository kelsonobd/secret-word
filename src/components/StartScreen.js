import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return (
        <div className="start">
           <h1>Secreto Word</h1>
           <p>Clique no botão abaixo pra começar a jogar</p>
           <button onClick={startGame}>Começar o jogo</button>
        </div>
    )
};


export default StartScreen