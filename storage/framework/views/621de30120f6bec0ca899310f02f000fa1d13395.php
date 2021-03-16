<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Организации
                        <a href="/superadmin/organizations/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>

                    </h2>
                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Название организации</th>
                                <th>ИНН\КПП</th>
                                <th>Юр.Адрес</th>
                                <th>Фио руководителя</th>
                                <th>Номер телефона</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название организации</th>
                                <th>ИНН\КПП</th>
                                <th>Юр.Адрес</th>
                                <th>Фио руководителя</th>
                                <th>Номер телефона</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            <?php if(!empty($organizations)): ?>
                                <?php $__currentLoopData = $organizations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $organization): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr role="row" class="odd">
                                        <td>
                                            <?php echo e($organization->id); ?>

                                        </td>
                                        <td>
                                            <?php echo e($organization->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($organization->inn); ?> / <?php echo e($organization->kpp); ?>

                                        </td>
                                        <td>
                                            <?php echo e($organization->adress); ?>

                                        </td>
                                        <td>
                                            <?php echo e($organization->fio_ceo); ?>

                                        </td>
                                        <td>
                                            <?php echo e($organization->phone); ?>

                                        </td>
                                        <td>
                                            <a href="/superadmin/organizations/edit/<?php echo e($organization->id); ?>" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/organizations/delete/<?php echo e($organization->id); ?>" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/organizations/show.blade.php ENDPATH**/ ?>