<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование фасовки
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/packing/update" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($packing->id); ?>">
                        <label for="name">Изображение фасовки</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>
                        <label for="name">Название фасовки</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" value="<?php echo e(old('name',$packing->name)); ?>" name="name" placeholder="Введите название фасовки..." required>
                            </div>
                        </div>

                        <label for="category_id">Описание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control"><?php echo e(old('description',$packing->description)); ?></textarea>
                            </div>
                        </div>

                        <label for="category_id">Категория</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="category_id" id="category_id">
                                    <?php if(!empty($categories)): ?>
                                        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <option value="<?php echo e($cat->id); ?>"
                                            <?php if($cat->id == $packing->category_id): ?>
                                                selected
                                            <?php endif; ?>
                                            ><?php echo e($cat->name); ?></option>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php endif; ?>
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" name="active" <?php if($packing->active): ?> checked <?php endif; ?> class="filled-in">
                        <label for="active">Включено</label>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/packing/edit.blade.php ENDPATH**/ ?>