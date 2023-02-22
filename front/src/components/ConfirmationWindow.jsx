

const ConfirmationWindow = ({isOpen, deleteFunction, name}) =>{
    
    
    return (
        <div className="modal">
            <div>
                <button className="close" onClick={isOpen}>X</button>
                <h5>Vous être sûr que vous voulez supprimer {name}?</h5>
                <button onClick={()=>deleteFunction}>Oui</button>
                <button onClick={isOpen}>Non</button>
            </div>
        </div>
        )
}

export default ConfirmationWindow