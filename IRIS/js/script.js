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

// File upload plugin start
$('.dropify').dropify({
    messages:{
        'default': 'Yükləmək istədiyiniz faylı bura yaxınlaşdırın',
        'replace': 'Faylı dəyişmək üçün klikləyin',
        'remove':  'Sil',
        'error':   'Seçdiyiniz fayl ölçüsü çox böyükdür'

    }
});
// File upload plugin end

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

$(".").click(function(){
    alert("asdasd")
})