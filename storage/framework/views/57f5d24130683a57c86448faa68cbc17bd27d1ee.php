<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование товара
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/products/update" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($product->id); ?>">
                        <label for="name">Изображение товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>

                        <label for="name">Название товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="<?php echo e(old('name',$product->name)); ?>" placeholder="Введите название товара...">
                            </div>
                        </div>

                        <label for="description">Описание товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" rows="4" class="form-control no-resize" placeholder="Описание товара..."><?php echo e(old('description',$product->description)); ?></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <?php if(!empty($categories)): ?>
                                        <label for="category_id">Категория товара</label>
                                        <select class="form-control" name="category_id">
                                            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value="<?php echo e($category->id); ?>"
                                                    <?php if((integer)$product->category_id === (integer)$category->id): ?>
                                                        selected
                                                    <?php endif; ?>
                                                ><?php echo e($category->name); ?></option>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    <?php endif; ?>
                                </div>
                                <div class="col-md-6">
                                    <?php if(!empty($types)): ?>
                                        <label for="type_id">Тип товара</label>
                                        <select class="form-control" name="type_id">
                                            <?php $__currentLoopData = $types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value="<?php echo e($type->id); ?>"
                                                        <?php if((integer)$product->type_id === (integer)$type->id): ?>
                                                        selected
                                                        <?php endif; ?>
                                                ><?php echo e($type->name); ?></option>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/products/edit.blade.php ENDPATH**/ ?>