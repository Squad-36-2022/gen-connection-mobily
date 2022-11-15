import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Alunos from "../Pages/Alunos";
import Professor from "../Pages/Professor";
import Pais from "../Pages/Pais";
import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login";
import Cadastrar from "../Pages/Cadastrar";


const {Screen, Navigator} = createNativeStackNavigator();

const StackRoutes = () => {
    return(
        <Navigator screenOptions={{
           headerShown: false
        }}>
            <Screen name="Inicio"
                    component={Inicio}
            />
            <Screen name="Login"
                    component={Login}
            />
            <Screen name="Cadastrar"
                    component={Cadastrar}
            />
            <Screen name="DashBoardAlunos"
                    component={Alunos}
            />
            <Screen name="DashBoardProfessor"
                    component={Professor}
            />
            <Screen name="DashBoardPais"
                    component={Pais}
            />
            
        </Navigator>
    )
}

export default StackRoutes;