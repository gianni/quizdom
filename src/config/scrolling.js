const scrollProps = (size) => {

    let options = {
        container: '#container',
        easing: 'ease-in',
        offset: 0,
        force: true,
        cancelable: false,
        onStart: function() {},
        onDone: function() {},
        onCancel: function() {},
        x: false,
        y: true
    };

    if(size === "sm"){
        options.x=true;
        options.y=false;
    }

    return options;
}

module.exports = scrollProps;