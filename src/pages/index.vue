<template> 
    <div id="container" :class="`container_${$mq}`">
        <div :class="`questions_${$mq}`">
            <div v-for="(question, index) in questions" :key="question.id">
                <b-card :id="`step${index}`" :class="`question_${$mq}`" v-bind:style="cardWidth" :title="`#${question.id} / ${questions.length} - ${question.text}`" :sub-title="question.topic">
                    <hr>
                    <b-form-group label="Seleziona la risposta corretta:">
                        <b-form-radio v-for="(option) in question.options" :key="`option${question.id}-${option.id}`" v-model="answer" :name="`option${question.id}-${option.id}`" :value="option.id">{{option.text}}</b-form-radio>
                    </b-form-group>
                    <b-row>
                        <b-col class="text-right"> 
                            <b-button @click="validate()">Procedi</b-button>
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
</template>

<script>

import axios from 'axios'
import Questions from '../data/questions.js';
import ScrollingConf from '../config/scrolling.js';

export default {
    name:'index',
    data: () => {
        return {
            "questions":Questions,
            "current":0,
            "answer":'',
            "screenWidth": window.innerWidth-20,
            "attemps": 0
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
        validate : function(){
            this.$data.attemps+=1
            let _this = this

            axios.post(`http://localhost:9900/question/check`,{
                question: this.$data.questions[this.$data.current].id,
                answer: this.$data.answer
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {

                if(response.data.answer == "ok"){
                    _this.$data.current += 1;
                    _this.$data.answer = '';
                    _this.$scrollTo(`#step${_this.$data.current}`, 500, ScrollingConf(_this.$mq))
                }

            }).catch(function(e){
                console.error('Verify that the server is running')
                console.log('In new shell type: "yarn run backend" and retry!')
                console.log('Exception: ', e)
            });

        },
        restart : function(){
            this.$data.current = 0;
            this.$data.answer = '';
            this.$scrollTo(`#step${this.$data.current}`, 500, ScrollingConf(this.$mq))
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


</style>