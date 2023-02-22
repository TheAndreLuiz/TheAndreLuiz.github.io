import './Inicio.css';
import '../Global.css'
import DestaquesBox from '../destaquesBox/DestaquesBox.js'

function GetNumberOfDestaques() {
    return 30 // TODO api request
}

function Inicio() {
    const destaques = [];
    for (let i = 0; i < GetNumberOfDestaques(); i++) {
        destaques.push(<DestaquesBox destaquePosition={i} />);
    }
    return (
        <div class="destaques">
            <div class="carousel">
                {destaques}
            </div>
        </div>
    );
}

export default Inicio;
