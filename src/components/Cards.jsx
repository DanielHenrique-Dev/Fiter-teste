export const Cards = ({ card }) => {

    return (
        <div className="card">
            <img src={(card.foto != '') ? card.foto : "./assets/img/user.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><strong>Nome:</strong> {card.nome}</h5>
                <p className="card-text"><strong>Cargo:</strong> {card.cargo}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted"><strong>Telefone:</strong> {card.telefone}</small>
            </div>
        </div>
    )
}