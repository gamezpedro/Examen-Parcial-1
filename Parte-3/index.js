let submit = $('.submit')
let crowdname = document.getElementById("name").value;

function submitListener(){
    $(submit).on("click",function(e){
        console.log(crowdname);
    });
}


function init(){
    submitListener();
}
init();
