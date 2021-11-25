import React from 'react'
import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'

const ImageUrl = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4";

export default function AboutPage(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.Title}><Text style={styles.TitleText}>Hi! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text></View>
            <View style ={styles.Content}>
                <Image style ={styles.Image01} source={{uri:ImageUrl}}/>
                <Text style ={styles.Text01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style ={styles.Text02}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                <View style ={styles.Button01}>
                    <Text style={styles.ButtonText}>여러분의 인스타계정</Text>
                </View>
            </View>
        </ScrollView>
        
    )
} 


const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : "#1F266A",
    },
    Title:{
        marginLeft : 20,
        marginRight : 15,
        marginTop: 70,
        padding : 25,

    },
    TitleText:{
        fontSize :27,
        fontWeight :"700",
        color : "#fff",
        alignItems :"center"
    },
    Content:{
        padding : 15,
        backgroundColor : "#fff",
        marginTop : 30,
        marginLeft : 25,
        marginRight : 25,
        borderRadius : 25,


    },
    Image01: {
        marginLeft: 80,
        marginTop: 80,
        borderRadius : 25,
        height: 170,
        width : 170,
        
    },
    Text01:{
        marginTop : 10,
        fontSize: 20,
        fontWeight:"700",
        textAlign: "center"
        
    },
    Text02:{
        marginTop : 20,
        fontSize : 15,
        fontWeight : "bold",
        textAlign: "center"
        
    },
    Button01:{
        marginTop : 20,
        marginLeft : 65,
        marginBottom : 80,
        backgroundColor: "orange",
        height : 70,
        width : 200,
        borderRadius : 25,
        alignContent :"center"
        
    },
    ButtonText:{
        marginTop : 25,
        textAlign: "center",
        fontWeight : "700",
        color : "#fff"

    },
})


        
    
