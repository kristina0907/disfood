<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование типа товара
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/types/update" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($category->id); ?>">
                        <label for="name">Изображение типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" value="<?php echo e(old('image',$category->image)); ?>"/>
                            </div>
                        </div>

                        <label for="name">Название типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name"  value="<?php echo e(old('name',$category->name)); ?>" placeholder="Введите название категории...">
                            </div>
                        </div>
                        <?php if(!empty($categories)): ?>
                            <select class="form-control" name="category_id">
                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($category->id); ?>"
                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <?php if($cat->id != $category->id): ?>
                                            <option value="<?php echo e($cat->id); ?>"
                                                    <?php if($category->category_id === $cat->id): ?>
                                                    selected
                                                <?php endif; ?>
                                            ><?php echo e($cat->name); ?></option>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    ><?php echo e($category->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        <?php endif; ?>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/typeproduct/edit.blade.php ENDPATH**/ ?>