import React ,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {View,Text,TextInput,TouchableOpacity,SafeAreaView, ScrollView, Animated} from 'react-native'
import {getFeedbackData} from '../../redux/feedback/actions'
import styles from './styles';
import { BinaryButton } from '../../components/binaryButton';
import { CustomRadioButton } from '../../components/customRadioButton';
import { Header } from '../../components/header';

const YES = 1
const NO = 0
const OTHERS = "openText"

class Feedback extends PureComponent {

    constructor (props) {
        super(props)
    
        this.state ={
            selectedQuestionId:"1",
            answers:{},
            noButtonPositions:null
        }
    }

    componentDidMount(){
        this.props.getFeedbackData()  
    }


    onClickYesNo = (questionId,action) => {
        action === NO && !this.state.noButtonPositions && this.buttonRef && this.buttonRef.measure( (fx, fy, width, height, px, py) => {
            this.setState({noButtonPositions:{fx, px}})
        })  
        let selectedAnswer = {
            ...this.state.answers,
            [questionId]:{
                selectedChoice:action,
            }
        }   
        this.setState({
            answers:selectedAnswer
        })
    }

    questionClicked =(questionId)=>{
        this.setState({
            selectedQuestionId:questionId
        })
    }

    renderQuestions = () =>{
        const {feedbackQuestionnaire} = this.props
        return Object.keys(feedbackQuestionnaire).map(questionId =>{
            const questionData = feedbackQuestionnaire[questionId]
            const isSelectedQuestion = this.state.selectedQuestionId === questionId
            const action = this.state.answers[questionId] && this.state.answers[questionId].selectedChoice
            let yesButtonStyle, noButtonStyle, yesButtonText, noButtonText = {}
            if(action === YES){
                yesButtonStyle = styles.highlightButton
                yesButtonText=styles.highlightButtonText
            }else if(action === NO){
                noButtonStyle = styles.highlightButton
                noButtonText = styles.highlightButtonText
            }
                  
            return <View  key={questionId} style={styles.questionContainer}>
                <TouchableOpacity onPress={()=>this.questionClicked(questionId)}>
                <Text style ={styles.questionStyle}>{questionData.questionText}</Text>
                </TouchableOpacity>
                {isSelectedQuestion &&
                <View style={styles.BinaryButtonWrapper}>
                <BinaryButton ref={buttonRef => this.buttonRef = buttonRef} onClickYes={()=>this.onClickYesNo(questionId,YES)} onClickNo={()=>this.onClickYesNo(questionId,NO)}
                    yesButtonStyle={yesButtonStyle}
                    noButtonStyle={noButtonStyle}
                    yesButtonText={yesButtonText}
                    noButtonText={noButtonText}
                />
                {action===NO && <View>
                    <View style={[styles.triangle, this.state.noButtonPositions ? {marginLeft: this.state.noButtonPositions.px} : {}]}/>
                    <View style={styles.optionsContainer}>{this.renederOptions(questionData)}</View></View>}
                </View>}
            </View>
        })
    }

    renederOptions = (questionData) => {
        return questionData.options.map(item=>{
            let questionId =  questionData.questionId
            let isSelected = item.optionId === this.state.answers[questionId].slectedOptionChoice
            return (
                <View key={item.optionId}>
                <View style={styles.optionWrapper}>
                <Text>{item.optionText}</Text>
                <CustomRadioButton onPress={()=>this.onOptionClicK(item.optionId,questionId)} isSelected={isSelected}/>
                </View>
                {isSelected && item.optionType === OTHERS ? <TextInput multiline={true} placeholder={"Enter Details"} style={styles.textInputStyle} onChangeText={(text) => this.onOptionClicK(item.optionId,questionId, text)} /> : null}
            </View>
            )
        })
    }

    onOptionClicK =(optionId, questionId, otherText) => {
        const updatedAnswers = {...this.state.answers,
            [questionId]:{
                ...this.state.answers[questionId],
                slectedOptionChoice:optionId,
                otherText: otherText
            }
        }
        this.setState({
            answers:updatedAnswers
        })
    }

    render(){
        const {feedbackQuestionnaire} = this.props
        return (<SafeAreaView style={styles.AndroidSafeArea}>
            <Header headerText={'Rate Your Experiance'} selectedQuestion={Object.keys(this.state.answers).length} totalQuestions={Object.keys(feedbackQuestionnaire).length}/>
            <ScrollView style={styles.mainContainer}>
            <Text style = {styles.title}>Please share your feedback about the bike. Help other bounce users</Text>
            {this.renderQuestions()}
            </ScrollView>
        </SafeAreaView>)
    }
}

const mapStateToProps = (state) =>{
    return {
        feedbackQuestionnaire : state.feebackState.feedbackQuestionnaire
    }
}

const mapDispatchToProps = {
    getFeedbackData: () => getFeedbackData()
}

export default connect(mapStateToProps,mapDispatchToProps)(Feedback)