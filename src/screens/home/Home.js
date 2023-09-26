import React , { useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import Api from "../../service/api"
import Pessoa from "./components/Pessoa";


export default function Home(props){

const [usuarios, setUsuarios] = useState([]);

    Api.get('/users')
        .then(response => {console.log(response.data)
        
        setUsuarios(response.data.users)
        
        })
    .catch(err =>{console.error('Erro', err)})


    function irParaUsuario(){
        props.navigation.navigate('usuarios', {nome:'user'})
    }

    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 30 }}>Home</Text>

            <Button mode='outlined' loading={true} onPress={irParaUsuario} >Ir para Feed</Button>

            <FlatList
                style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    listPessoas: {
        width: '100%'
    }
})