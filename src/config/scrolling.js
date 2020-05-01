module.exports = {
    "sm":{
        container: '#container',
        easing: 'ease-in',
        offset: 0,
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
        x: true,
        y: false
    },
    "lg":{
        container: '#container',
        easing: 'ease-in',
        offset: 0,
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
};