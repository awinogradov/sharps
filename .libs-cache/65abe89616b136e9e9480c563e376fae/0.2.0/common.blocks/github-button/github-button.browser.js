modules.require([], function() {
    (function(d, s, id){
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if(d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.async = true;
        js.defer = true;
        js.id = id;
        js.src = 'https://buttons.github.io/buttons.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'github-bjs'));
});
