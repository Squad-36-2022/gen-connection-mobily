import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native"
import api from "../../Api";
import CardNotificacoes from "../../Components/CardNotificacoes/index.jsx";


const Pais = () => {

    const [msg, setMsg] = useState([]);

    useEffect(() => {

        const loadCard = async () => {
            const resposta = await api.get("/api/Notificacoes");
            const data = resposta.data;
            console.log(data)
            setMsg(data);
        };

        loadCard();
    }, []);

    function logOut() {
        navigation.navigate('Inicio')
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    olá Srs responsaveis
                </Text>
                <Button title="Sair" onPress={logOut} />
            </View>

            <Text style={styles.subTitle}>Aqui estão suas notificacões</Text>
            <FlatList data={msg}
                keyExtractor={msg.notificacoesId}
                renderItem={({ item }) => <CardNotificacoes data={item} />}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#cfe0f0d8',
        paddingVertical:16
    },
    
    subTitle:{
        fontSize:18,
        marginVertical:10,
        marginLeft:20
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
});

export default Pais;