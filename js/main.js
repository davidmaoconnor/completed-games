 var editRow;

 // Build a <table> row of Product data
 function productBuildTableRow() {
     var ret =
         "<tr>" +
         "<td>" + $("#gameTitle").val() + "</td>" +
         "<td>" + $("#platform").val() + "</td>" +
         "<td>" + $("#dateFinished").val() + "</td>" +
         "<td>" + $("#hours").val() + " hours, " + $("#minutes").val() + " minutes</td>" +
         "<td>" +
         "<button type='button' " +
         "id='editButton' " +
         "class='btn btn-default'>Edit" +
         "</button>" +
         "</td>" +
         "<td>" +
         "<button type='button' " +
         "id='deleteButton' " +
         "class='btn btn-default'>Delete" +
         "</button>" +
         "</td>" +
         "</tr>";

     return ret;
 }

 // Add product to <table>
 function productAddToTable() {
     // First check if a <tbody> tag exists, add one if not
     if ($("#table tbody").length == 0) {
         $("#table").append("<tbody></tbody>");
     }

     // Append product to table
     $("#table tbody").append(
         productBuildTableRow());
 }

 function productDisplay(ctl) {
     editRow = $(ctl).parents("tr");
     var cols = editRow.children("td");

     $("#gameTitle").val($(cols[0]).text());
     $("#platform").val($(cols[1]).text());
     $("#dateFinished").val($(cols[2]).text());
     // $("#hours").val($(cols[3]).val());
     // $("#minutes").val($(cols[4]).val());

     // Change Update Button Text
     $("#updateButton").text("Update");
 }

 // Update product in <table>
 function productUpdateInTable() {
     // Add changed product to table
     $(editRow).after(productBuildTableRow());

     // Remove original product
     $(editRow).remove();

     // Clear form fields
     formClear();

     // Change Update Button Text
     $("#updateButton").text("Add");
 }

 // Delete product from <table>
 function productDelete(ctl) {
     $(ctl).parents("tr").remove();
 }

 // Clear form fields
 function formClear() {
     $("#gameTitle").val("");
     $("#platform").val("");
     $("#dateFinished").val("");
     $("#hours").val("");
     $("#minutes").val("");
 }

 function productUpdate() {
     if ($("#updateButton").text() == "Update") {
         productUpdateInTable();
     } else {
         productAddToTable();
     }

     $('#editButton').click(function() {
         productDisplay(this);
     });

     $('#deleteButton').click(function() {
         productDelete(this);
     });

     // Clear form fields
     formClear();

     // Focus to product name field
     $("#gameTitle").focus();
 }

 $('#updateButton').click(function() {
     productUpdate();
 });
 