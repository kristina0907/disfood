<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Организации
                        <a href="/superadmin/offers/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                <th>Название предложения</th>
                                <th>Описание</th>
                                <th>Товар</th>
                                <th>Организация</th>
                                <th>Страна</th>
                                <th>Город</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название предложения</th>
                                <th>Описание</th>
                                <th>Товар</th>
                                <th>Организация</th>
                                <th>Страна</th>
                                <th>Город</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            <?php if(!empty($offers)): ?>
                                <?php $__currentLoopData = $offers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $offer): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <tr role="row" class="odd">
                                        <td>
                                            <?php echo e($offer->id); ?>

                                        </td>
                                        <td>
                                            <?php echo e($offer->name); ?>

                                        </td>
                                        <td>
                                            <?php echo e($offer->description); ?>

                                        </td>
                                        <td>
                                            <?php if(!empty($offer->product)): ?>
                                                <?php echo e($offer->product->name); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->organization)): ?>
                                                <?php echo e($offer->organization->name); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->country)): ?>
                                                <?php echo e($offer->country->title_ru); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->city)): ?>
                                                <?php echo e($offer->city->title_ru); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->price)): ?>
                                                <?php echo e($offer->price); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->capacity)): ?>
                                                <?php echo e($offer->capacity); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <?php if(!empty($offer->active)): ?>
                                                <?php echo e($offer->active); ?>

                                            <?php endif; ?>
                                        </td>
                                        <td>
                                            <a href="/superadmin/offers/edit/<?php echo e($offer->id); ?>" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/offers/delete/<?php echo e($offer->id); ?>" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/offers/show.blade.php ENDPATH**/ ?>