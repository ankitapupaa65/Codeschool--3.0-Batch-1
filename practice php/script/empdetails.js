let empDetail=[];
let working_status=[];
let locations=[];
let designation=[];


$.ajax({
    url: 'api/empDetails.php',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        empDetails = data.data.empDetails;
        working_status=data.data.working_status;
        locations=data.data.location;
        designation=data.data.designation;
        addEmpDetails(data.data.empDetails);
         addWorking_status(data.data.working_status);
        addLocation(data.data.location);
        addDesignation(data.data.designation);

    },
    error: function (status) {
        console.log('Request failed with status: ' + status);
    }
});




function addEmpDetails(empDetail) {
  

    $('#tableData').empty();

console.log(empDetail);

    for (let i = 0; i < empDetail.length; i++) {
      console.log(2345);

        $('#tableData').append(`
       <tr>
                 
                <td>
                  ${empDetail[i].empcode}
                </td>
                <td>${empDetail[i].name}</td>
                <td>${empDetail[i].dob}</td>
               <td>${empDetail[i].doj}</td>
                <td>${empDetail[i].gender}</td>
                <td>${empDetail[i].phone}</td>
                <td>${empDetail[i].working_status}</td>
                <td>${empDetail[i].location}</td>
                <td>${empDetail[i].designation}</td>
                  
                <td><div class="d-flex"> 
                    <button class="btn btn-danger text-white" id="deleteBtn">Delete</button>
                     <button class="btn btn-warning text-white mx-2" id="updateBtn">Update</button>              </div></td>
              </tr>
        `)
    };
}






function addWorking_status(working_status) {
  $('#working_status').empty();
  $('#working_status').append(`
       <option value="">Select Here</option>
       `)
  for (let i = 0; i < working_status.length; i++) {

    $('#working_status').append(`
        <option value="${working_status[i].id}">${working_status[i].description}</option>
        `)

  };
}



function addLocation(locations) {
  $('#location').empty();
  $('#location').append(`
       <option value="">Select Here</option>
       `)
  for (let i = 0; i < locations.length; i++) {

    $('#location').append(`
        <option value="${locations[i].id}">${locations[i].description}</option>
        `)

  };
}


function addDesignation(designation) {
  $('#designation').empty();
  $('#designation').append(`
       <option value="">Select Here</option>
       `)
  for (let i = 0; i < designation.length; i++) {

    $('#designation').append(`
        <option value="${designation[i].id}">${designation[i].description}</option>
        `)

  };
}







// function filterworking_status() {

//   let formData = {
//     working_status_id : $('#working_status').val()
//   }

//   $.ajax({
//     url: 'api/filterWorking_status.php',
//     method: 'POST',
//     dataType: 'json',
//     data: formData,
//     success: function (data) {
//        console.log(data,123);
//        empDetail = data.data.empDetails;
//       addEmpDetails(data.data.empDetails);
//     },
//     error: function (status) {
//       console.log('Request failed with status: ' + status);
//     }
//   });
// }


function modal1(){
 $('#Modal1').modal('show');

}
