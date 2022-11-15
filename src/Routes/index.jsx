import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./StackRoutes";
import NavBar from "../Components/Navbar";

const Routes = () => {
    return(
        <NavigationContainer>
            <NavBar/>
            <StackRoutes/>
        </NavigationContainer>
    )
}

export default Routes;