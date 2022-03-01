export const Cards = ({ card }) => {

    return (
        <div className="card">
            <img src={(card.foto != '') ? card.foto : "./assets/img/user.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{card.nome}</h5>
                <p className="card-text">{card.cargo}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{card.telefone}</small>
            </div>
        </div>
    )
}