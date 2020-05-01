<template> 
  
  <div>
     
    <!-- steps-->
    <div class="steps">
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
    </div>

    <div id="container">
        <div class="questions">
            <b-row v-for="(question, index) in questions" :key="question.id">
                <b-col>
                    <b-card :id="`step${index}`" class="question" :title="`#${question.id} - ${question.text}`" :sub-title="question.topic">

                        <b-form-group label="Select the corret answer:">
                            <b-form-radio v-for="(option, index) in question.options" :key="`option${option.id}`" v-model="answer" name="option" :value="index">{{option.text}}</b-form-radio>
                        </b-form-group>

                        <b-row>
                            <b-col class="text-right"> 
                                <b-button @click="moveNext()">Procedi</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center">
                    <b-card id="step3" class="question" title="" sub-title="">
                        <h1>GOOD JOB!</h1>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>

    
  </div>

</template>

<script>

import Questions from '../data/questions.js';

export default {
    name:'index',
    data: () => {
        return {
            "questions":Questions,
            "question":0,
            "answer":''
        }
    },
    methods:{
        moveNext : function(){

            let options = {
                container: '#container',
                easing: 'ease-in',
                offset: -60,
                force: true,
                cancelable: false,
                onStart: function(element) {
                    console.log('start',element);
                },
                onDone: function(element) {
                    console.log('done',element);
                },
                onCancel: function() {
                    console.log('cancelled');
                },
                x: false,
                y: true
            }

            if(this.$data.questions[this.$data.question].options[this.$data.answer].text == "Bianco"){
                this.$data.question += 1;
                this.$data.answer = '';
                this.$scrollTo(`#step${this.$data.question}`, 500, options)
            } else {
                console.log('wrong answer')
            }

        }
    }
}
</script>

<style scoped>

#container{
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

.questions{
    margin-top:30px;
    margin-bottom:30px;
}

.question{
    margin-bottom:100px;
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