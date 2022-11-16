import { useState, useEffect } from "react";
import api from "../../Api";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import CardJogos from "../../Components/CardJogos";
import CardAtividades from "../../Components/CardAtividades";

const Alunos = () => {

    const [jogos, setJogos] = useState([]);
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {

        const loadCard = async () => {
            const resposta = await api.get("/api/Jogos");
            const data = resposta.data;
            console.log(data)
            setJogos(data);
        };

        loadCard();
    }, []);

    useEffect(() => {
        const loadCardAtividades = async () => {
            const resposta = await api.get("/api/Atividades");
            const data = resposta.data;
            console.log(data)
            setAtividades(data);
        };

        loadCardAtividades();
    }, []);

    function logOut() {
        navigation.navigate('Inicio')
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    olá aluno
                </Text>
                <Button title="Sair" onPress={logOut} />
            </View>

            <View style={styles.iconsContainer}>
                <Icon style={styles.icon} name="gamepad" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="chart-pie" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="chart-line" size={28} color='#9A7D0A' />
                <Icon style={styles.icon} name="star" size={28} color='#9A7D0A' />
            </View>

            <Text style={styles.subTitle}>Meus Jogos</Text>
            <FlatList data={jogos}
                keyExtractor={jogos.jogosId}
                renderItem={({ item }) => <CardJogos data={item} />}

            />

            <Text style={styles.subTitle}>Minhas Atividades</Text>
            <FlatList data={atividades}
                keyExtractor={atividades.atividadesId}
                renderItem={({ item }) => <CardAtividades data={item} />}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfe0f0d8',
        paddingVertical: 16
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        margin:20
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
        textAlign: 'left',
        width: '100%',
        fontWeight: 'bold'

    },
    subTitle: {
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 20
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    icon: {
        borderWidth: 8,
        borderColor: '#f87058',
        padding: 6,
        backgroundColor: '#e8eb32',
        borderRadius: '50%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    }

});

export default Alunos;