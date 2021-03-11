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

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
            //setChanges(serializedData);
            //$this.parents('div.body').find('textarea').val(serializedData);
        });



        $('#companyInput').on('input',function (e){
            e.preventDefault();
            var $this = $(this);
            var $val = $(this).val();
            if($val.length >= 4)
            {
                setTimeout( getOrganizations($this,$val), 1000);
            }

        });

        $('#countryInput').on('input',function (e){
            e.preventDefault();
            var $this = $(this);
            var $val = $(this).val();
            if($val.length >= 4)
            {
                setTimeout( getCountries($this,$val), 1000);
            }

        });

        $('#cityInput').keyup(delay(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $val = $(this).val();
            if($val.length >= 4)
            {
                getCities($this,$val);
            }
        }, 1000));


        $('#cityInputFrom').keyup(delay(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $val = $(this).val();
            if($val.length >= 4)
            {
                getCities($this,$val);
            }
        }, 1000));

        $('#cityInputTo').keyup(delay(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $val = $(this).val();
            if($val.length >= 4)
            {
                getCities($this,$val);
            }
        }, 1000));


        function delay(callback, ms) {
            var timer = 0;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    callback.apply(context, args);
                }, ms || 0);
            };
        }

        /**
         *
         * @param  $this
         * @param  $val
         */
        function getOrganizations($this,$val)
        {
            $.ajax(
                {
                url: '/superadmin/organizations/findsearch',
                type: "POST",
                data: {data: $val},
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                   if(data.length > 0)
                   {
                       $("#companyList").empty();
                       for(var i=0; i<data.length; i++)
                       {
                            $("#companyList").append("<option value='" + data[i].inn + "'>"+data[i].name+"</option>");
                       }
                   }else {
                       $("#companyList").empty();
                       $("#companyList").append("<option value='Ничего не найдено'></option>");
                   }
                },

                error: function (msg) {
                    $("#companyList").append("<option value='Ничего не найдено'></option>");
                }
            })
        }

        /**
         *
         * @param  $this
         * @param  $val
         */

        function getCountries($this,$val)
        {
            $.ajax(
                {
                    url: '/superadmin/countries/findsearch',
                    type: "POST",
                    data: {data: $val},
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (data) {
                        if(data.length > 0)
                        {
                            $("#countryList").empty();
                            for(var i=0; i<data.length; i++)
                            {
                                $("#countryList").append("<option value='" + data[i].country_id + "'>"+data[i].title_ru+"</option>");
                            }
                        }
                    },

                    error: function (msg) {
                        $("#countryList").append("<option value='Ничего не найдено'></option>");
                    }
                })
        }


        async function getCities($this,$val)
        {
            await $.ajax(
                {
                    url: '/superadmin/cities/findsearch',
                    type: "POST",
                    data: {data: $val},
                    headers: {
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                    },
                    success: function (data) {
                        if(data.length > 0)
                        {
                            $("#cityList").empty();
                            for(var i=0; i<data.length; i++)
                            {
                                $("#cityList").append("<option value='" + data[i].city_id + "'>"+ data[i].title_ru +"</option>");
                            }
                        }
                    },

                    error: function (msg) {

                    }
                })
        }

        Dropzone.options.frmFileUpload = {
            paramName: "file",
            maxFilesize: 2
        };


    });
</script>
<?php /**PATH /var/www/html/disfood/resources/views/Admin/layouts/scripts.blade.php ENDPATH**/ ?>