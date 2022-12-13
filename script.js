let lists = document.getElementsByClassName("pull-down-list");
console.log(lists)
window.addEventListener('load', function(){
    var li = document.getElementById("lists")

    const pullDownButton = document.getElementById("lists")

    pullDownButton.addEventListener('mouseover', function(){
        console.log("乗る")
    })

    li.addEventListener('click', function(){
        console.log('クリック');
    }, false);
    li.click();

    li.addEventListener('mouseout', function(){
        console.log('外れる');
    });
     li.onmouseout();

})