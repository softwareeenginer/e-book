import React from "react";
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {Form,Input,Item, Icon} from "native-base";
import {black, minimalist_orange,white} from "../../constants/Colors";
import LoadingButton from "../../components/LoadingButton";
// @ts-ignore
import {t} from "../../locales/i18n.js";

const Register = (props:any) => {
    return(
        <ImageBackground
            source={require('../../assets/images/start/logres.png')}
            style={styles.main}
        >
            <Form style={styles.form}>
                <Item style={styles.item}>
                    <Icon
                        style={styles.icon}
                        type='FontAwesome'
                        name='user'
                    />
                    <Input
                        autoCompleteType="email"
                        keyboardType="email-address"
                        style={styles.input}
                        placeholderTextColor={black}
                        placeholder={t('register.name_surname')}
                    />
                </Item>
                <Item style={styles.item_two}>
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
                        placeholder={t('register.password')}
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
                        placeholder={t('register.password_again')}
                    />
                </Item>
            </Form>
            <LoadingButton
                buttonStyle={styles.button}
                spinnerColor={white}
                children={
                    <Text style={styles.button_text}>{t('register.sign_up')}</Text>
                }
            />
            <View style={styles.login_view}>
                <Text style={styles.l_text}>{t('register.l_text')}</Text>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.l_text_}>{t('register.l_text_')}</Text>
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
    login_view:{marginTop:20,flexDirection:"row"},
    l_text:{color:black,fontSize:14},
    l_text_:{color:minimalist_orange,fontWeight:"bold",fontSize:15}
});
export default Register;