// Datatable Customize start
$('#example23').DataTable({
            language: {
                "info":           "Göstərilir _START_ - _END_ , cəmi _TOTAL_ məlumatdan",
                "zeroRecords":    "Sorğuya uyğun nəticə tapılmadı",
                "infoEmpty":      "Göstərilir 0 - 0 , cəmi 0 məlumatdan",
                "infoFiltered":   "(Cəmi _MAX_ məlumatdan filter olunur)",
                "search":         "Axtar:",
                paginate: {
                    previous: 'Geri',
                    next:     'İrəli',
                },
            },
            dom: 'Bfrtip',
            buttons: [

                {
                extend:'copy', text:"Kopyala",
                },
                {
                extend:'excel', text:"Excel"
                },
                {
                extend:'pdf', text:"pdf"
                },
                {
                extend:'print', text:"Çap Et"
                }
            ]
        });
// Datatable Customize end



// view_edit page buttons start
$(".js_form_edit").click(function(){
    $(".js_form p").css("display","none");
    $(".js_form input").css("display","block");
})
$(".js_form_cancel").click(function(){
    $(".js_form input").css("display","none");
    $(".js_form p").css("display","block");
})
// view_edit page buttons end

// $("#example23 .m-r-5").click(function(){
//     var newURL = "file:///C:/Users/User/Desktop/IRIS/IRIS/view_edit_employee.html"
//     window.location.replace(newURL)
// })

