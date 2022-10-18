import Popup from "reactjs-popup";

const PopupProfil = () => (
    <Popup trigger={<button className="modifierProfil"> Modifier profil</button>} position="center">
            <form className="formulaireProfil">
                <h2>Mon profil :</h2>
                <label>Pseudonyme :</label>
                <input type="text" className="username" />
                <br></br>
                <label>Adresse email : </label>
                <input type="text" className="email" />
                <button>Valider</button>
            </form>
    </Popup>
)

export default PopupProfil;