import { StyleSheet, View, Text, Image } from 'react-native'


const NavBar = () => {

    return (
        <View style={styles.container}>
            <View style={styles.rowlogo}>
                    <Text style={styles.logo}>
                    <Image style={styles.img} 
                           source={require('../../../assets/1.png')}
                    />
                        Gen Connection
                    </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        height: 120,
        backgroundColor: '#2574a8',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    rowlogo: {
        justifyContent:'center',
        alignItems: 'center',
    },

    logo: {
        textAlign: 'left',
        fontSize: 36,
        fontWeight: 'bolder',
        color: '#ffffff',
    },
    img:{
        marginRight:10,
        width:88,
        height:48
    }

});

export default NavBar;