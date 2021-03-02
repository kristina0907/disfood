<!-- Jquery Core Js -->
<script src="/theme/plugins/jquery/jquery.min.js"></script>

<!-- Bootstrap Core Js -->
<script src="/theme/plugins/bootstrap/js/bootstrap.js"></script>

<!-- Select Plugin Js -->
<script src="/theme/plugins/bootstrap-select/js/bootstrap-select.js"></script>

<!-- Slimscroll Plugin Js -->
<script src="/theme/plugins/jquery-slimscroll/jquery.slimscroll.js"></script>

<!-- Waves Effect Plugin Js -->
<script src="/theme/plugins/node-waves/waves.js"></script>

<!-- Jquery CountTo Plugin Js -->
<script src="/theme/plugins/jquery-countto/jquery.countTo.js"></script>

<!-- Morris Plugin Js -->
<script src="/theme/plugins/raphael/raphael.min.js"></script>
<script src="/theme/plugins/morrisjs/morris.js"></script>

<!-- ChartJs -->
<script src="/theme/plugins/chartjs/Chart.bundle.js"></script>

<!-- Flot Charts Plugin Js -->
<script src="/theme/plugins/flot-charts/jquery.flot.js"></script>
<script src="/theme/plugins/flot-charts/jquery.flot.resize.js"></script>
<script src="/theme/plugins/flot-charts/jquery.flot.pie.js"></script>
<script src="/theme/plugins/flot-charts/jquery.flot.categories.js"></script>
<script src="/theme/plugins/flot-charts/jquery.flot.time.js"></script>

<!-- Sparkline Chart Plugin Js -->
<script src="/theme/plugins/jquery-sparkline/jquery.sparkline.js"></script>

<!-- Jquery DataTable Plugin Js -->
<script src="/theme/plugins/jquery-datatable/jquery.dataTables.js"></script>
<script src="/theme/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/buttons.flash.min.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/jszip.min.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/pdfmake.min.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/vfs_fonts.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/buttons.html5.min.js"></script>
<script src="/theme/plugins/jquery-datatable/extensions/export/buttons.print.min.js"></script>

<script src="/theme/js/pages/tables/jquery-datatable.js"></script>

<!-- Multi Select Plugin Js -->
<script src="/theme/plugins/multi-select/js/jquery.multi-select.js"></script>


<!-- Jquery Nestable -->
<script src="/theme/plugins/nestable/jquery.nestable.js"></script>
<!-- Dropzone Plugin Js -->
<script src="/theme/plugins/dropzone/dropzone.js"></script>

<!-- Custom Js -->
<script src="/theme/js/admin.js"></script>

<script>
    $(function () {
        $('.dd').nestable();

        $('.dd').on('change', function () {
            var $this = $(this);
            var serializedData = $($this).nestable('serialize');
            setChanges(serializedData);
            //$this.parents('div.body').find('textarea').val(serializedData);
        });

        function setChanges(data)
        {
            console.log(data)
            $.ajax(
                {
                url: '/superadmin/categories/changetree',
                type: "POST",
                data: {data: data},
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    console.log(data)
                },

                error: function (msg) {
                    alert('Ошибка');
                }
            })
        }

        Dropzone.options.frmFileUpload = {
            paramName: "file",
            maxFilesize: 2
        };
    });
</script>
