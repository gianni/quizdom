<template> 
  
  <div>
     
    <!-- steps   -->
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

    <div id="container" >

        <div class="questions">
            
            <b-row>
                <b-col>
                    <b-card id="step1" class="question" title="QUESTION 1" sub-title="Storia">
                        <b-card-text>
                            Di quale colore era il cavallo bianco di Napoleone?    
                        </b-card-text>
                        <b-row>
                            <b-col class="text-right"> 
                                <b-button @click="moveNext()">Procedi</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col>
                    <b-card id="step2" class="question disabled" title="QUESTION 2" sub-title="Storia">
                        <b-card-text>
                            Di quale colore era il cavallo bianco di Napoleone?    
                        </b-card-text>
                        <b-row>
                            <b-col class="text-right"> 
                                <b-button @click="moveNext()">Procedi</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <b-card id="step3" class="question disabled2" title="QUESTION 3" sub-title="Storia">
                        <b-card-text>
                            Di quale colore era il cavallo bianco di Napoleone?    
                        </b-card-text>
                        <b-row>
                            <b-col class="text-right"> 
                                <b-button @click="moveNext()">Procedi</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
                        
        </div>

    </div>

    
  </div>

</template>

<script>

export default {
    name:'index',
    data: () => {
        return {
            "currentStep":1
        }
    },
    methods:{
        moveNext : function(){

            let options = {
                container: '#container',
                easing: 'ease-in',
                offset: -60,
                force: true,
                cancelable: true,
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

            this.$data.currentStep += 1;
            this.$scrollTo(`#step${this.$data.currentStep}`, 500, options)
        }
    }
}
</script>

<style scoped>

#container{
    overflow: hidden;
    width:100%;
    height:300px;
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