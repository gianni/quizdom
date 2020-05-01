<template> 
  
  <div>
     
    <!-- steps-->
    <!-- <div class="steps">
        <b-row>
            <b-col>
                <div class="step step1">WHO?</div>
            </b-col>
            <b-col>
                <div class="step step2">A</div>
            </b-col>
            <b-col>
                <div class="step step3">B</div>
            </b-col>
            <b-col>
                <div class="step step4">C</div>
            </b-col>
            <b-col>
                <div class="step step5">SCORE</div>
            </b-col>
        </b-row>
    </div> -->

    <div id="container" :class="`container_${$mq}`">
        <div :class="`questions_${$mq}`">
            <div v-for="(question, index) in questions" :key="question.id">
                    <b-card :id="`step${index}`" :class="`question_${$mq}`" v-bind:style="cardWidth" :title="`#${question.id} / ${questions.length} - ${question.text}`" :sub-title="question.topic">

                        <b-form-group label="Select the corret answer:">
                            <b-form-radio v-for="(option, index) in question.options" :key="`option${question.id}-${option.id}`" v-model="answer" :name="`option${question.id}-${option.id}`" :value="index">{{option.text}}</b-form-radio>
                        </b-form-group>

                        <b-row>
                            <b-col class="text-right"> 
                                <b-button @click="moveNext()">Procedi</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
            </div>
            <div class="text-center">
                <b-card id="step3" :class="`question_${$mq}`" v-bind:style="cardWidth" title="" sub-title="">
                    <h1>GOOD JOB!</h1>
                    <div>
                        <img :class="`restart_icon_${$mq}`" @click="restart()" src="../assets/arrow.png">
                    </div>
                    <h3 @click="restart()" class="restart">Restart</h3>
                </b-card>
            </div>
        </div>
    </div>

    
  </div>

</template>

<script>

import Questions from '../data/questions.js';
import ScrollingConf from '../config/scrolling.js';

export default {
    name:'index',
    data: () => {
        return {
            "questions":Questions,
            "current":0,
            "answer":'',
            "screenWidth": window.innerWidth-20
        }
    },
    computed:{
        cardWidth: function(){
            if(this.$mq == "sm"){
                return {
                    width: window.innerWidth-20+"px"
                }
            } else {
                return {}
            }
        }
    },
    methods:{
        moveNext : function(){
            if(this.$data.questions[this.$data.current].options[this.$data.answer].text == "Bianco"){
                this.$data.current += 1;
                this.$data.answer = '';
                this.$scrollTo(`#step${this.$data.current}`, 500, ScrollingConf[this.$mq])
            } else {
                console.log('wrong answer')
            }

        },
        restart : function(){
            this.$data.current = 0;
            this.$data.answer = '';
            this.$scrollTo(`#step${this.$data.current}`, 500, ScrollingConf[this.$mq])
        }
    }
}
</script>

<style scoped>

.container_sm{
    overflow: hidden;
}

.container_lg{
    overflow: hidden;
    width:100%;
    height:320px;
}

.steps{
    margin-top:30px;
    margin-bottom:30px;
    text-align:center;
}

.step{
    width:100px;
    height:50px;
    background-color:#AFE3C0;
    border-radius: 20px;
    padding:20px;
    line-height: 15px;
    margin:auto;
}

.questions_sm{
    width: 5000px;
}

.questions_lg{
    margin-top:30px;
    margin-bottom:30px;
}

.question_sm{
    width: 340px;
    float:left;
    margin-right:100px;
}

.question_lg{
    margin-bottom:100px;
    height:400px;
}

.restart{
    cursor: pointer;
}

.restart_icon_lg{
    cursor: pointer;
    transform: rotate(90deg);
    margin-top: 30px;
}

.restart_icon_sm{
    cursor: pointer;
    margin-top: 30px;
}


.step1{
    background-color: #d34e18;
}

.step2{
    background-color: #8963BA;
}

.step3{
    background-color: #AA4465;
}

.step4{
    background-color: #d34e18;
}

.step5{
    background-color: #8963BA;
}


</style>