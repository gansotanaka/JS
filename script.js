let lists = document.getElementsByClassName("pull-down-list");
console.log(lists)
window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")

    pullDownButton.addEventListener('mouseover', function(){
        this.setAttribute('style', "background-color: blue;")
        console.log("乗った時は青");
    }, false);

    pullDownButton.addEventListener('mouseout', function(){
        this.removeAttribute('style', "background-color: red;")
        console.log('外れた時は赤');
    }, false);

    pullDownButton.addEventListener('click', function(){
        if (pullDownParents.getAttribute("style")=="display:block;"){
            pullDownParents.removeAttribute("style","display:block")
            console.log("非表示")
        } else {
            pullDownParents.setAttribute("style","display:block;")
            console.log("表示")
        }
    })
    
})
