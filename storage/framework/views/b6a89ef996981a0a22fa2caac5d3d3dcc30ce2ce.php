<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Фасовка продукта
                        <a href="/superadmin/packing/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                                <th>Фото</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Категория</th>
                                                <th>Описание</th>
                                                <th>Активно</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Фото</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Категория</th>
                                                <th>Описание</th>
                                                <th>Активно</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            <?php if(!empty($packing)): ?>
                                                <?php $__currentLoopData = $packing; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $pack): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <tr role="row" class="odd">
                                                        <td><?php echo e($pack->id); ?></td>
                                                        <td>
                                                            <img src="<?php echo e('/storage'.$pack->image); ?>" style="width: 50px;height: auto;"/>
                                                        </td>
                                                        <td><?php echo e($pack->name); ?></td>
                                                        <td><?php echo e($pack->slug); ?></td>
                                                        <td>
                                                            <?php if($pack->category_id): ?>
                                                                <span class="badge bg-green"><?php echo e($pack->category->name); ?></span>
                                                            <?php else: ?>
                                                                <span class="badge bg-red">Нет</span>
                                                            <?php endif; ?>
                                                        </td>
                                                        <td><?php echo e($pack->description); ?></td>
                                                        <td><?php echo e($pack->active); ?></td>
                                                        <td><?php echo e($pack->created_at); ?></td>
                                                        <td>
                                                            <a href="/superadmin/packing/edit/<?php echo e($pack->id); ?>" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/packing/delete/<?php echo e($pack->id); ?>" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/packing/show.blade.php ENDPATH**/ ?>