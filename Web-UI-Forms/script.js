
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
            deletemyserver($($(this)[0]).data("id"));
            console.log($($(this)[0]).data("id"));
            e.preventDefault();
        })
    }
    function deletemyserver(k)
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

    }


    function mainmenu()
    {
        window.location.reload();
    }

}
