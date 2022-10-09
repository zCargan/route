class Menu extends React.Component {
    render (){
        return  <ul id="button">
                    <li id="Element"><button onClick={() => Menu_off()}><img src="image/Hamburger_icon.png" id="img_menu"></img></button></li>
                    <li id="Element"><a id="button" href="index.html">Home</a></li>
                    <li id="Element"><a id="button" href="carte.html"> Carte</a></li>
                    <li id="Element"><a id="button" href="objectifs.html">Objectifs</a></li>
                    <li id="Element"><a id="button">?</a></li>
                    <li id="Element"><a id="button" href="profil.html">Profil</a></li>
                </ul>
    }
}
class Initialise extends React.Component{
    render (){
        return  
    }
}
class Menu2 extends React.Component{
    render (){
        return  <ul id="button">
                    <li id="Element"><button onClick={() => Menu_on()}><img src="image/Hamburger_icon.png" id="img_menu"></img></button></li>
                </ul>
    }
}
function Menu_off(){
    ReactDOM.render(<Initialise/>, document.querySelector('#Menu'))
    ReactDOM.render(<Menu2/>, document.querySelector('#Menu'))
}
function Menu_on(){
    ReactDOM.render(<Menu/>, document.querySelector('#Menu'))
}
ReactDOM.render(<Menu/>, document.querySelector('#Menu'))