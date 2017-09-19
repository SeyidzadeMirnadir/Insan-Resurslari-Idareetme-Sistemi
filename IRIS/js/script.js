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

$('.dropify').dropify({
    messages:{
        'default': 'Yükləmək istədiyiniz faylı bura yaxınlaşdırın',
        'replace': 'Faylı dəyişmək üçün klikləyin',
        'remove':  'Sil',
        'error':   'Seçdiyiniz fayl ölçüsü çox böyükdür'

    }
});