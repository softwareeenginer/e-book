import React from "react";
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {Form,Input,Item, Icon} from "native-base";
import {black, minimalist_orange,white} from "../../constants/Colors";
import LoadingButton from "../../components/LoadingButton";
// @ts-ignore
import {t} from "../../locales/i18n.js";

const Login = (props:any) => {
    return(
        <ImageBackground
            source={require('../../assets/images/start/logres.png')}
            style={styles.main}
        >
            <Form style={styles.form}>
                <Item style={styles.item}>
                    <Icon
                        style={styles.icon}
                        type='Entypo'
                        name='mail'
                    />
                    <Input
                        autoCompleteType="email"
                        keyboardType="email-address"
                        style={styles.input}
                        placeholderTextColor={black}
                        placeholder='E-mail'
                    />
                </Item>
                <Item style={styles.item_two}>
                    <Icon
                        style={styles.icon}
                        type='Entypo'
                        name='key'
                    />
                    <Input
                        style={styles.input}
                        secureTextEntry={true}
                        placeholderTextColor={black}
                        placeholder={t('login.password')}
                    />
                </Item>
            </Form>
            <LoadingButton
                //disabled
                //isLoading
                buttonStyle={styles.button}
                spinnerColor={white}
                children={
                    <Text style={styles.button_text}>{t('login.sign_in')}</Text>
                }
            />
            <View style={styles.register_view}>
                <Text style={styles.r_text}>{t('login.r_text')}</Text>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate('Register')
                    }}
                >
                    <Text style={styles.r_text_two}>{t('login.r_text_')}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    main:{flex:1,alignItems:'center',justifyContent:'center'},
    form:{width:'90%'},
    item:{borderBottomWidth:1,borderBottomColor:black,borderBottomLeftRadius:5,borderBottomRightRadius:5},
    item_two:{borderBottomWidth:1,borderBottomColor:black,borderBottomLeftRadius:5,borderBottomRightRadius:5,marginTop:20},
    icon:{color:black,marginLeft:8},
    input:{color:black},
    button:{backgroundColor:minimalist_orange,borderRadius:10,marginTop:40,marginHorizontal:80},
    button_text:{color:white,fontWeight:"bold"},
    register_view:{marginTop:20,flexDirection:"row"},
    r_text:{color:black,fontSize:14},
    r_text_two:{color:minimalist_orange,fontWeight:"bold",fontSize:15}
});
/*
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignSelf: 'center',
                alignItems:'center',
                paddingTop:Platform.OS=="android"?StatusBar.currentHeight:5
            }}
*/
export default Login;