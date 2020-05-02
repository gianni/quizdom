var express = require('express');
var app = express();
const cors = require('cors');
var questions = require('../src/data/questions.js')

app.use(express.json());

const corsConfig = {
    origin: true,
    credentials: true
};
  
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));

app.get('/', function(req, res) {
    res.json({
        status: 'ok',
        description: 'QuziDOM backend Api'
    });
});

app.get('/questions', function(req, res) {
    res.json(questions);
});

app.post('/question/check', function(req, res) {

    let result={
        "answer":"ko"
    }

    questions.forEach(question => {
        if(question.id === req.body.question && question.answer === req.body.answer){
            result.answer="ok";
        }        
    });

    res.json(result);

});

app.listen(9900, function () {
    console.log('QuziDOM backend Api listening on port 9900...')
})
