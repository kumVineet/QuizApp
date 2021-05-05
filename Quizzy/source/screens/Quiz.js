import React from 'react';
import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import Button from "../assets/components/Button"
import Question from "../assets/data/Question.json"

const Quiz = ({ route, navigation}) => {

    
    const {Categories} = route.params
    const key = Categories.key

    const dic = key == "DIETS" ? Question.DIETS : key == "CURR_AFF" ? Question.CURR_AFF : key == "CoVID" ? Question.CoVID : Question.SPORTS;

    const [question, setQuestion] = useState([dic[0].question])
    const [option1, setOption1] = useState([dic[0].option1])
    const [option2, setOption2] = useState([dic[0].option2])
    const [option3, setOption3] = useState([dic[0].option3])
    const [option4, setOption4] = useState([dic[0].option4])
    const [validAnswer, setValidAnswer] = useState([dic[0].answer])

    const [questionIndex, setQuestionIndex] = useState(0)
    const [points, setPoints] = useState(0)

    useEffect(() => {
    const clearData = navigation.addListener('focus', () => {
      setQuestionIndex(0);
      setPoints(0);
    });
    return clearData;
  }, [navigation]);


    useEffect (() => {

        
        dic.map( (quizQuestionAnswer, index) => {

            if(index !== 0 && index < 10){

                const que = question
                que.push(quizQuestionAnswer.question)
                setQuestion(que)
                const opt1 = option1
                opt1.push(quizQuestionAnswer.option1)
                const opt2 = option2
                opt2.push(quizQuestionAnswer.option2)
                const opt3 = option3
                opt3.push(quizQuestionAnswer.option3)
                const opt4 = option4
                opt4.push(quizQuestionAnswer.option4)
                const ans = validAnswer
                ans.push(quizQuestionAnswer.answer)
                setValidAnswer(ans)
            }

        })
    },[])

    const verifyAnswer = (answerValue) => {
        if(answerValue == validAnswer[questionIndex]){
            setPoints(points+10)
            console.log("++++Yesss++++")
        }else{
            console.log("++++No++++")
        }
        if(question.length > questionIndex+1){
            setQuestionIndex(questionIndex+1)
        }else{
            setQuestionIndex(0);
            console.log("++++GAME OVER++++")
        }
        console.log(questionIndex)
    }

  return (
      <SafeAreaView>
    
        <View>
            <View style = {styles.title}>
                <Text style = {styles.text}>{Categories.title}</Text>
            </View>
            
            <View style = {styles.question}>
                <Text style = {styles.text2}>{question[questionIndex]}</Text>
            </View>
        </View>

        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Button
                key={option1[questionIndex]}
                text={option1[questionIndex] }
                onPress={(text) => verifyAnswer(text)}
            />
        </View>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Button
                key={option2[questionIndex]}
                text={option2[questionIndex]}
                onPress={(text) => verifyAnswer(text)}
            />
        </View>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Button
                key={option3[questionIndex]}
                text={option3[questionIndex]}
                onPress={(text) => verifyAnswer(text)}
            />
        </View>
        <View style = {{justifyContent:'center',alignItems:'center'}}>
            <Button
                key={option4[questionIndex]}
                text={option4[questionIndex]}
                onPress={(text) => verifyAnswer(text)}
            />
        </View>

        <View style = {{flexDirection:'row', marginTop:40}}>
                <TouchableOpacity
                    onPress = {()=> Alert.alert(
                        "Quit Quiz?",
                        "Your progress will be Lost ",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => navigation.navigate("Lobby") }
                        ]
                    )}
                >
                    <View style = {styles.container}>
                        <Text style = {styles.text2}>Quit Quiz </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    //onPress = {()=>navigation.navigate("Result" , {points, questionIndex})}
                    onPress = {()=> Alert.alert(
                        "Finish Quiz",
                        "Do you want to see your score?",
                        [
                            {
                                text: "Cancel",
                                onPress: () => navigation.navigate("Lobby"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => navigation.navigate("Result" , {points, questionIndex}) }
                        ]
                    )}
                >
                    <View style = {styles.container}>
                        <Text style = {styles.text2}> Finish </Text>
                    </View>
                </TouchableOpacity>
            </View>

      
    </SafeAreaView>
  );
};


export default Quiz;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    title:{
        marginTop:10,
        width:WIDTH,
        alignItems:'center'
    },
    text: {
        fontSize:25,
        fontWeight:'800'
    },
    question:{
        marginHorizontal:20,
        marginTop:80,
        width:350,
        height:120,
        alignItems:'center',
        justifyContent:'center'
    },
    text2:{
        fontSize:20,
        fontWeight:'600'
    },
    container:{
        backgroundColor:"green",
        borderRadius:20,
        width:170,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 12,
        shadowOpacity:0.5,
        shadowColor:'#000',
        shadowOffset: {width: 2, height:2},
        shadowRadius:3,
        marginTop:40
    },
});