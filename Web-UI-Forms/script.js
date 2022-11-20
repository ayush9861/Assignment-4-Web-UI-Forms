
function hide() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".background").style.display="none";
        
      }

function hide1() {
    document.getElementById("div2").style.display = "none";
    document.querySelector(".background").style.display="none";

}


function display() {
    document.querySelector(".modal").style.display="block";
    document.querySelector(".background").style.display="block";
    
      }
function display1() {
    document.getElementById("div2").style.display="block";
    document.querySelector(".background").style.display="block";

}

function subdisplay(){
    document.getElementById("subdiv").style.display="block";
    document.querySelector(".background").style.display="block";
}
function subhide()
{
    document.getElementById("subdiv").style.display="none";
    document.querySelector(".background").style.display="none";
}
function subdisplayupdate(){
    document.getElementById("subdiv2").style.display="block";
    document.querySelector(".background").style.display="block";
}
function subhideupdate()
{
    document.getElementById("subdiv2").style.display="none";
    document.querySelector(".background").style.display="none";
}



      let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8080/api/server/");
    request.send();
    request.onload = function() {
      console.log(request);
      if (request.status == 200) {
        var a = JSON.parse(request.response);
console.log(a);

//////////Creating another Function
Insertdata(a);
function Insertdata(data){
var getTable = document.getElementById("body");
for(i = 0; i <= data.length; i++ ){
var row =  `<tr>
            <td id= "tdid1">${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].language}</td>
            <td>${data[i].framework}</td>
            <td><button class="edit"   data-id="${data[i].id}" onclick="display1()"  type="button">Edit Data</button></td>
            <td><button class="delete" data-id="${data[i].id}" onclick="deletec()" type="button">Delete Data</button></td>            
          </tr>`

getTable.innerHTML += row;

}


}



      } else {
        console.log(`error ${request.status} ${request.statusText}`);
      }

     loadmydata();


};
///////////////

    $(document).ready(function () {

            $(".edit").click(function(e){

                update2($($(this)[0]).data("id"));
                e.preventDefault();
            });

    })
////////////////////


/////////////
function update2(a){
    $.ajax({
      url: "http://localhost:8080/api/server/" + a,
      type: "GET",
      dataType: "json",
      success: function (data) {
        $("#id1").val(data.id),
          $("#first1").val(data.name),
          $("#second1").val(data.language),
          $("#third1").val(data.framework);
      },
      error: function (data) {
        getdata(data);
        console.log("Error");
      },
    });};


$(document).ready()
{
    function viewid() {
        $(".view").click(function (e) {
             getdata($($(this)[0]).data("id"));
            window.m = $($(this)[0]).data("id");
             console.log("View" + m);
            e.preventDefault();
        })
    };

}

/////////////////////////////

    function getdata(k) {
        let request1 = new XMLHttpRequest();
        request1.open("GET", "http://localhost:8080/api/subjects/subjects/"+ k);
        request1.send();
        request1.onload = function() {
            console.log(request1);
            if (request1.status == 200) {
                var a = JSON.parse(request1.response);
                console.log(a);

//////////Creating another Function
                Insertdata(a);
                function Insertdata(data){
                    $("#body1").empty();
                    var getTable = document.getElementById("body1");
                    for(i = 0; i <= data.length; i++ ){
                        var row =  `<tr>
            <td>${data[i].subjectId}</td>
            <td>${data[i].subjectName}</td>
            <td>${data[i].subjectCode}</td>
            <td><button class="editmysub"   data-id="${data[i].subjectId}" onclick="fun()"  type="button">Edit Data</button></td>
            <td><button class="subdelete" data-id="${data[i].subjectId}"  onclick="loadmysub()" type="button">Delete Data</button></td>
          </tr>`
////// New Ajax Request



                        ///////////
if (data.success){
    $("#body1").load(" #body1");
}
                        getTable.innerHTML += row;
                        showdiv();

                    }


                }



            } else {
                console.log(`error ${request.status} ${request.statusText}`);
            }
            ////////////////






        };



    }



function loadmysub() {

    $(".subdelete").click(function (e) {
        deletesubdata($($(this)[0]).data("id"));
        console.log($($(this)[0]).data("id"));
        e.preventDefault();
    });

}
function deletesubdata(id){
    $.ajax({
        url:'http://localhost:8080/api/server/' + id,
        type: 'DELETE',
        dataType:'json',
        success : function(data ){
            console.log("Window:"+ window.m);
            getdata(window.m)
            // getdata(k)
        },
        error: function (data,m)
        {
            console.log("Window:"+ window.m);

            getdata(window.m)
        }})};


////// Sending the Put Request

    function editdata1() {
        $("#update1").on("click", function (e) {
            let data1 =
                {
                    id: $("#id1").val(),
                    name: $("#first1").val(),
                    language: $("#second1").val(),
                    framework: $("#third1").val()
                }
            updatedata($("#id1").val(), data1);
        });
    }
///////////

    function updatedata(id,data){
        console.log($("#id1").val(), data);
        $.ajax({
          url: "http://localhost:8080/api/server/update/" + id,
          headers: {
            "Content-Type": "application/json",
          },
          type: "PUT",
          dataType: "json",
          data: JSON.stringify(data),
          success: function (data) {
            window.location.reload();
          },
          error: function () {
            console.log("Error");
          },
        });
    }


    function deletec()
    {
        $(".delete").click(function (e) {
            deletemycourse($($(this)[0]).data("id"));
            console.log($($(this)[0]).data("id"));
            e.preventDefault();
        })
    }
    function deletemycourse(k)
    {
        $.ajax({
          url: "http://localhost:8080/api/server/" + k,
          type: "DELETE",
          dataType: "json",
          success: function (data) {
            window.location.reload();
          },
          error: function () {
            window.location.reload();
          },
        });
    }

$(document).ready()
{


    function deletedata(id) {
        $.ajax({
          url: "http://localhost:8080/api/delete/" + id,
          type: "DELETE",
          dataType: "json",
          success: function (data) {
            window.location.reload();
          },
          error: function () {},
        });
    };


    $(document).ready()
    {
        showdiv()
    }

    function showdiv() {
        $("#maindivone").hide();
        $("#subjectdiv").show();

    }


    function addsubjects() {
        var id = $('#subfirst').val();
        console.log(name);
        var name = $('#subsecond').val();
        var code = $('#subthird').val();
        $.ajax({
            url: "http://localhost:8080/api/subjects/add/?subjectCode=" + code + "&subjectName=" + name + "&sId=" + window.m,
            type: 'POST',
            success: function (data) {
                getdata(window.m);
                subhide();
            },
            error: function (data) {
                getdata(window.m);
                subhide();
            }
        });

    }



function fun() {

    $(".editmysub").click(function (e) {
        editmysub1($($(this)[0]).data("id"));
        console.log($($(this)[0]).data("id"));
        e.preventDefault();
    })
}

    function editmysub1(b){
        $.ajax({
            url:'http://localhost:8080/api/subjects/list/' + b,
            type: 'GET',
            dataType:'json',
            success : function(data){
                console.log(data);
                console.log($("#subsecondupdateid").val(data.subjectId)),
                    console.log("Get Success"),
                    console.log("Test:"+ $("#subsecondupdateid").val(data.subjectId)),
                    $("#subsecondupdateid").val(data.subjectId),
                    $("#subsecondupdatename").val(data.subjectName),
                    $("#subthirdupdatecode").val(data.subjectCode),
                    console.log(  $("#subthirdupdatecode").val(data.subjectCode),
                    );

                    // getdata(window.m);
                console.log("Success")
                subdisplayupdate();
            },
            error: function (data)
            {
                $("#subsecondupdateid").val(data.subjectId),
                    $("#subsecondupdatename").val(data.subjectName),
                    $("#subthirdupdatecode").val(data.subjectCode),                console.log("Error");
            }})};

        function subjectsupdate() {
            $("#subsubmitupdate").on("click", function (e) {
                let subupdate =
                    {
                        subjectId: $("#subsecondupdateid").val(),
                        subjectName: $("#subsecondupdatename").val(),
                        subjectCode: $("#subthirdupdatecode").val(),
                    }
                updatesub($("#subsecondupdateid").val());
                console.log("Test:" + $("#subsecondupdatename").val());


            });
        }

    function updatesub(i){

    var code = $("#subthirdupdatecode").val();
    var name = $("#subsecondupdatename").val();

        $.ajax({
            url:'http://localhost:8080/api/subjects/update?subjectCode='+code+'&subjectName='+name+'&subjectId='+i+'&coursesId='+window.m,
            type: 'POST',
            success:function (data){
          getdata(window.m);
          subhideupdate();
            },
            error:function(){
                getdata(window.m);
                subhideupdate();


            }
        });

    }
    function mainmenu()
    {
        window.location.reload();
    }

}
