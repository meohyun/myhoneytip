import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity,
ScrollView} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>나만의 꿀팁</Text>
    <Image source={main}
    style={styles.mainImage}>
    </Image>
    <ScrollView style={styles.scroll} horizontal={true}>
      <TouchableOpacity style={styles.Button01}><Text style={styles.ButtonText}>생활</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Button02}><Text style={styles.ButtonText}>제테크</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Button03}><Text style={styles.ButtonText}>반려견</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Button04}><Text style={styles.ButtonText}>꿀팁 찜</Text></TouchableOpacity>
    </ScrollView>
    <View style={styles.cardcontainer} horizontal={true} >
      <View style ={styles.card}>
        <Image style={styles.pizzaimage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}/>
        <Text style={styles.cardText}>
          <Text style={styles.cardTitle}>먹다 남은 피자를 촉촉하게</Text>
          <Text style={styles.cardDesc} numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
          <Text style={styles.cardDate}>2021.11.24</Text>
        </Text>
      </View>
      <View style ={styles.card01}></View>
    </View>
  </ScrollView>)
  
  }
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor:"#fff"
    },
    title:{
      fontSize : 20,
      fontWeight:"700",
      marginTop: 50,
      marginLeft: 20
    },
    mainImage:{
      marginTop:20,
      height:200,
      width:"90%",
      padding: 10,
      borderRadius : 10,
      alignSelf : "center" // flex 없이도 정렬 가능
    },
    scroll:{
      marginTop : 20,
      marginLeft : 10,
      height : 60,
    },
    Button01 :{
      width : 100,
      height : 50,
      padding : 15,
      backgroundColor: "#fdc453",
      borderRadius : 15,
      margin:7

    },
    Button02 :{
      width : 100,
      height : 50,
      padding : 15,
      backgroundColor: "#000",
      borderRadius : 15,
      margin:7
      
    },
    Button03 :{
      width : 100,
      height : 50,
      padding : 15,
      backgroundColor: "#9adbc5",
      borderRadius : 15,
      margin:7
      
    },
    Button04 :{
      width : 100,
      height : 50,
      padding : 15,
      backgroundColor: "#f886a8",
      borderRadius : 15,
      margin:7
      
    },
    ButtonText:{
      color : "#fff",
      fontWeight: "700",
      textAlign : "center",
    },

    cardcontainer:{
      borderWidth: 1,
      marginTop : 10,
      marginLeft: 10,
    },

    card:{
      flex : 1,
      flexDirection: "row",
      margin : 10,
    },

    pizzaimage:{
      flex : 1,
      width : 100,
      height : 100,
      borderRadius : 10,
    },
    cardText :{
      flex : 2,
      marginLeft : 10,
      alignSelf: "center",
    },
    cardTitle:{
      fontWeight: "700",
      fontSize : 20,
    },
    cardDesc:{
      fontSize : 15
    },
    cardDate:{
      fontSize : 10
    }
  })
