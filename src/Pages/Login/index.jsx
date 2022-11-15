import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../Components/InputForm";
import { useForm } from 'react-hook-form';


const Login = () => {

    const { control, handleSubmit } = useForm();

    const navigation = useNavigation();

    const authenticateUser = async (userData) => {
       console.log(userData)
       
    }

    function openCadastro() {
        navigation.navigate('Cadastrar')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Entre ou faça seu cadastro</Text>

           

            <label style={styles.label}>Email</label>
            <InputForm
                name='Email'
                control={control}
                placeholder='Digite a cidade'
            />

            <label style={styles.label}>Senha</label>
            <InputForm
                name='Senha'
                control={control}
                placeholder='Digite seu email'
            />

            <View style={styles.containerBtn}>
                <Button title="Entrar" onPress={handleSubmit(authenticateUser)} />
                <Button title="Fazer Cadastro" onPress={openCadastro} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#cfe0f0d8',
        alignItems: 'center',
    },

    descricao: {
        marginTop: 16,
        fontSize: 26,
        fontWeight: 'bold'
    },
    containerBtn: {
        backgroundColor:'#cfe0f0d8',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    label: {
        fontSize: 20,
        width: '90%',
        textAlign: 'left'
    }
});

export default Login;