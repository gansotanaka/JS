let lists = document.getElementsByClassName("pull-down-list");
console.log(lists)
window.addEventListener('load', function(){
    var pullDownButton = document.getElementById("lists")

    pullDownButton.addEventListener('mouseover', function(){
        pullDownButton.setAttribute('style', "background-color: blue;")
        console.log("乗った時は青");
    }, false);

    pullDownButton.addEventListener('click', function(){
        pullDownButton.style.backgroundColor = 'green';
        console.log('クリックした時は緑');
    }, false);

    pullDownButton.addEventListener('mouseout', function(){
        pullDownButton.removeAttribute('style', "background-color: red;")
        console.log('外れた時は赤');
    }, false);

})
