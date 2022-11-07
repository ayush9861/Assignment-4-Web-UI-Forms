// function subdisplay(){
//     document.querySelector(".modal").style.display="block";
//     document.querySelector(".background").style.display="block";
// }

function subhide() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".background").style.display="none";

}
function addsubjects(){
    var id = $('#subfirst').val();
    console.log(name);
    var name = $('#subsecond').val();
    var code = $('#subthird').val();
    $.ajax({
        url: "http://localhost:8080/subjects/add/s?subjectCode="+code+"&subjectName="+name+"&sId=1",
        type: 'POST',
        success: function (data) {
            window.location.reload();
        },
        error: function (data){
            window.location.reload();
        }
    });

}
