<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Типы доставки
                        <a href="/superadmin/typedelivery/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            <?php if(!empty($types)): ?>
                                                <?php $__currentLoopData = $types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <tr role="row" class="odd">
                                                        <td><?php echo e($category->id); ?></td>
                                                        <td><?php echo e($category->name); ?></td>
                                                        <td><?php echo e($category->slug); ?></td>
                                                        <td><?php echo e($category->created_at); ?></td>
                                                        <td>
                                                            <a href="/superadmin/typedelivery/edit/<?php echo e($category->id); ?>" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/typedelivery/delete/<?php echo e($category->id); ?>" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/typedelivery/show.blade.php ENDPATH**/ ?>