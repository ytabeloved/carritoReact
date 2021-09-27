import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../Navbar/navbar";
import ItemListContainer from '../Container/ItemListContainer'
import Home from "../Home/Home";

export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
            <NavBar/>
                <div>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/Crystal" component={ItemListContainer} />
                        <Route exact path="/Incense" component={ItemListContainer} />
                        <Route render={() => <h1>La pagina que buscas aun no existe!!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Layout;