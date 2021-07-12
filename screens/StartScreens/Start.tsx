import React, {useEffect} from "react";
import {ImageBackground, Text, StyleSheet} from "react-native";
import {minimalist_orange} from "../../constants/Colors";
const Start = (props:any) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Login')
        },5000)
    },[])

    return(
        <ImageBackground
            source={require('../../assets/images/start/background.png')}
            style={styles.background}
        >
            <Text style={styles.text}>e-Books</Text>
        </ImageBackground>
    )
}
export default Start;
const styles = StyleSheet.create({
    background:{flex:1,alignItems:'center',justifyContent:'center'},
    text:{fontSize:40,fontWeight:"bold",color:minimalist_orange}
});