<!DOCTYPE html>
<html lang="en">


<head>
    <?php echo $__env->make('Admin.layouts.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</head>

<body id="page-top" class="theme-cyan">

    <?php echo $__env->make('Admin.layouts.loader', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('Admin.layouts.overlaysidebars', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <?php echo $__env->make('Admin.layouts.topsidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>


    <!-- Sidebar -->
    <?php echo $__env->make('Admin.layouts.sidebar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- End of Sidebar -->

    <section class="content">
        <div class="container-fluid">
            <!-- Topbar -->
                <?php echo $__env->make('Admin.layouts.navbar', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <!-- End of Topbar -->
            <!-- Content Row -->
            <div class="row">
                <?php echo $__env->yieldContent('content'); ?>
            </div>
        </div>
    </section>
    <!-- Footer -->
        <?php echo $__env->make('Admin.layouts.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <!-- End of Footer -->


    <?php echo $__env->make('Admin.layouts.scripts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>




</body>

</html>
<?php /**PATH /var/www/html/disfood/resources/views/Admin/master.blade.php ENDPATH**/ ?>