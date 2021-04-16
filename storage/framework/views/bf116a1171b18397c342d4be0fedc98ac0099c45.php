<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование статуса заказа
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orderstatuses/update" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($status->id); ?>">
                        <label for="name">Название статуса заказа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="<?php echo e(old('name',$status->name)); ?>" placeholder="Введите название статуса заказа...">
                            </div>
                        </div>
                        <label for="slug">Slug статуса заказа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="slug" class="form-control" name="slug" value="<?php echo e(old('slug',$status->slug)); ?>" placeholder="Введите slug статуса заказа...">
                            </div>
                        </div>
                        <br/>
                        <?php echo $__env->make('Admin.layouts.errors', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        <button type="submit" class="btn btn-primary m-t-15 waves-effect">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/orderstatuses/edit.blade.php ENDPATH**/ ?>