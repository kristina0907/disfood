<!DOCTYPE html>
<html lang="en">


<head>
    @include('Admin.layouts.header')
</head>

<body id="page-top" class="theme-cyan">

    @include('Admin.layouts.loader')

    @include('Admin.layouts.overlaysidebars')

    @include('Admin.layouts.topsidebar')


    <!-- Sidebar -->
    @include('Admin.layouts.sidebar')
    <!-- End of Sidebar -->

    <section class="content">
        <div class="container-fluid">
            <!-- Topbar -->
                @include('Admin.layouts.navbar')
            <!-- End of Topbar -->
            <!-- Content Row -->
            <div class="row">
                @yield('content')
            </div>
        </div>
    </section>
    <!-- Footer -->
        @include('Admin.layouts.footer')
    <!-- End of Footer -->


    @include('Admin.layouts.scripts')




</body>

</html>
