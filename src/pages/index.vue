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

    <div class="container">

    <!-- question -->
    <div class="questions">
        <b-row>
            <b-col>
                <b-card class="question" title="QUESTION 1" sub-title="Storia">
                    <b-card-text>
                        Di quale colore era il cavallo bianco di Napoleone?    
                    </b-card-text>
                    <b-row>
                        <b-col class="text-right"> 
                            <b-button>Procedi</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card class="question disabled" title="QUESTION 1" sub-title="Storia">
                    <b-card-text>
                        Di quale colore era il cavallo bianco di Napoleone?    
                    </b-card-text>
                    <b-row>
                        <b-col class="text-right"> 
                            <b-button>Procedi</b-button>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card class="question disabled" title="QUESTION 1" sub-title="Storia">
                    <b-card-text>
                        Di quale colore era il cavallo bianco di Napoleone?    
                    </b-card-text>
                    <b-row>
                        <b-col class="text-right"> 
                            <b-button>Procedi</b-button>
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
    name:'index'
}
</script>

<style scoped>
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
    margin-bottom:30px;
}

.disabled{
    opacity: 0.5;
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