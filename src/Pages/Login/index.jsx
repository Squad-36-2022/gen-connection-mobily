import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputForm from "../../Components/InputForm";
import { useForm } from 'react-hook-form';
import { RadioButton } from "react-native-paper";


const Login = () => {

    const { control, handleSubmit } = useForm();

    const [typeUser, setTypeUser] = useState(null);
    console.log(typeUser)

    const navigation = useNavigation();

    const authenticateUser = async (userData) => {
        console.log(userData)

        switch (typeUser) {
            case 'aluno':
                navigation.navigate('DashBoardAlunos')
                break;
            case 'professor':
                navigation.navigate('DashBoardProfessor')
                break;
            case 'pais':
                navigation.navigate('DashBoardPais')
                break;

            default:
                break;
        }

    }

    function openCadastro() {
        navigation.navigate('Cadastrar')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.descricao}>Entre ou faça seu cadastro</Text>

            <View style={styles.radioContainer}>

                <RadioButton
                    value="aluno"
                    status={typeUser === 'aluno' ? 'checked' : 'unchecked'}
                    onPress={() => setTypeUser('aluno')}
                />
                <label style={styles.textlabel}>Aluno</label>

                <RadioButton
                    value="professor"
                    status={typeUser === 'professor' ? 'checked' : 'unchecked'}
                    onPress={() => setTypeUser('professor')}
                />
                <label style={styles.textlabel}>Professor</label>

                <RadioButton
                    value="pais"
                    status={typeUser === 'pais' ? 'checked' : 'unchecked'}
                    onPress={() => setTypeUser('pais')}
                />
                <label style={styles.textlabel}>Pais</label>
            </View>


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
        backgroundColor: '#cfe0f0d8',
        alignItems: 'center',
    },

    descricao: {
        marginTop: 16,
        fontSize: 26,
        fontWeight: 'bold'
    },
    containerBtn: {
        backgroundColor: '#cfe0f0d8',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    label: {
        fontSize: 20,
        width: '90%',
        textAlign: 'left'
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textlabel: {
        fontSize: 20,
        marginRight: 24
    }

});

export default Login;