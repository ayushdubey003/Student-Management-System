function displayColleges() {
    fetch("http://localhost:3000/api/colleges",{method:"GET"}).
    then(function(response){
        return response.json();
    }).then(function(data){
        var bodyRows="";
        console.log(data);

        for(var i=0;i<data.length;i++){
            bodyRows=bodyRows+"<tr>"+"<td>"+data[i].name+"</td></tr>";
        }
        console.log(bodyRows);
        document.getElementById("collegeList").innerHTML=bodyRows;
    });
}

function addCollege() {
    var college=document.getElementById('college').value;
    var college_name={
        name:college
    };
    fetch("http://localhost:3000/api/colleges",
    {   method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(college_name)}).then(function(response){
        if(response.status==200){
            window.location="collegelist.html";
        }
    });
}

function fun() {
    fetch("http://localhost:3000/api/students",{method:'GET'}).
    then(function(response){
        return response.json();
    }).then(function(data){
       var bodyrows="";
       console.log(data);
       for(var i=0;i<data.length;i++)
       {
           bodyrows=bodyrows+"<tr>"+"<td>"+"<a href='details.html'>"+data[i].name+"</a></td>"+
           "<td>"+data[i].email+"</td>"+
           "<td>"+data[i].reg_no+"</td>"+
           "<td>"+data[i].college_id+"</td></tr>";
       }
       document.getElementById("table").innerHTML=bodyrows;
    });
}

function discolleges() {
    var form=document.getElementById("form");
    fetch("http://localhost:3000/api/colleges",{method:'GET'}).
    then(function(response){
        return response.json();
    }).then(function(data){
        var options="";
        for(var i=0;i<data.length;i++)
        {
            console.log(data[i]);
            options=options+"<option value = '"+data[i]._id+"'>"+data[i].name+"</options>";
        }
        form.college.innerHTML=options;
    });
}

function userform() {
    var form=document.getElementById("form");
    var name=form.name.value;
    var email=form.email.value;
    var reg_no=form.reg_no.value;
    var college_id=form.college.value;
    var studentDetails={
        name : name,
        email : email,
        reg_no : reg_no,
        college_id : college_id
    };
    fetch("http://localhost:3000/api/students",
    {
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(studentDetails)}).then(function(response){
            if(response.status==200)
            {
                alert("Succesful");
                window.location="index.html";
            }
        });
}

function studentDetail() {
    var url = new URL(window.location.href);
    console.log(url);
    var id = url.searchParams.get("id");
    console.log(id);

    // fetch("http://localhost:3000/api/students/" + id, { method: "GET" })
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //     var display =
    //       "<p>Name :" +
    //       data.name +
    //       "</p>" +
    //       "<p>Reg No :" +
    //       data.reg_no +
    //       "</p>" +
    //       "<p>Email :" +
    //       data.email +
    //       "</p>" +
    //       "<p>College :" +
    //       data.college_id +
    //       "</p>" +
    //       "<button class='btn btn-primary' onclick='deleteStudent(\"" +
    //       data._id +
    //       "\")'>Delete</button>";

    //     document.getElementById("details").innerHTML = display;
    //   });
}

function deleteStudent(id) {}