import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"


const Inicio = () => {

    const navigation = useNavigation();

    const openLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Gen Connection é uma plataforma de conexão entre alunos, pais e professores
            </Text>

            <Text style={styles.subTitle}>Alunos</Text>
            <Text style={styles.descricao}>
                Aqui você pode realizar suas atividades, compartilhar suas conquistas e a cada etapa
                concluída acumular pontos que serão exibidos no seu perfil dentro de um ranking geral
                contendo informações sobre desempenho, além disso poderá receber dicas de cursos que
                sejam coerentes aos seus interesses, tudo feito para te auxiliar no aprendizado escolar
                e profissional
            </Text>

            <Text style={styles.subTitle}>Professores</Text>
            <Text style={styles.descricao}>
                Professor, aqui você pode realizar o download de atividades pedagógicas, ficar por dentro de dicas de cursos
                gratuitos para evoluir sua carreira profissional e ter a possibilidade de se conectar com os alunos e
                seus responsáveis para notificá-los quando necessário
            </Text>

            <Text style={styles.subTitle}>Pais</Text>
            <Text style={styles.descricao}>
                Senhores pais e responsáveis, agora ficou muito mais fácil de acompanhar a jornada dos seus filhos no âmbito
                escolar pois aqui você poderá se conectar com os professores para observar e ficar informado a cerca
                do desempenho educacional do aluno do qual você é responsável
            </Text>
            <View style={styles.btnContainer}>
                <Button title="Entrar" onPress={openLogin} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfe0f0d8',
        paddingVertical: 16
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:20,
        marginBottom:10
    },
    subTitle:{
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:20,
    },

    descricao:{
        fontSize:16,
        marginHorizontal:20,
        marginBottom:10
    },
    btnContainer:{
        marginHorizontal:20
    }
});

export default Inicio;