import './DestaquesBox.css';
import defaultProfilePicture from '../../resources/defaultProfilePicture.png'

var numeroMaxEstrelas = 5

var positionToName = {
    0: "André Bigaran",
    1: "André Luiz",
    2: "Pedro",
    3: "numero 4 blabla",
    4: "Jao",
};

var positionToTitulo = {
    0: "programador",
    1: "Deus",
    2: "sla",
    3: "so um cara",
    4: "godlike",
};

var positionToEstrelas = {
    0: 5,
    1: 4,
    2: 3,
    3: 2,
    4: 1,
}

function GetNome(destaquePosition) {
    return positionToName[destaquePosition.destaquePosition] // TODO api request
}

function GetTitulo(destaquePosition) {
    return positionToTitulo[destaquePosition.destaquePosition] // TODO api request
}

function GetEstrelas(destaquePosition) {
    var pontuacaoEmEstrelas = positionToEstrelas[destaquePosition.destaquePosition] // TODO api request
    const estrelas = []
    for (let i = 0; i < numeroMaxEstrelas; i++) {
        if (i < pontuacaoEmEstrelas) {
            estrelas.push(<label class="yellow">★</label>)
        }
        else {
            estrelas.push(<label class="white">★</label>)
        }
    }

    return <div>{estrelas}</div>
}



function DestaquesBox(destaquePosition) {
    return (
        <div class="box padding">
            <div class="profilePicture">
                <img src={defaultProfilePicture} />
            </div>
            <div class="nome">
                <p>{GetNome(destaquePosition)}</p>
            </div>
            <div class="titulo">
                <p>{GetTitulo(destaquePosition)}</p>
            </div>
            <div class="estrelas">
                <div class="product-review-stars">
                    {GetEstrelas(destaquePosition)}
                </div>
            </div>
        </div>
    );
}

export default DestaquesBox;
