<?php $__env->startSection('content'); ?>


    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование пользователя
                    </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another action</a></li>
                                <li><a href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body">
                    <form action="/superadmin/user/update" method="POST">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($user->id); ?>">
                        <label for="name">Имя пользователя</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="<?php echo e($user->name); ?>" placeholder="Введите имя пользователя...">
                            </div>
                        </div>

                        <label for="email">E-mail</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="email" id="email" class="form-control" name="email" value="<?php echo e($user->email); ?>" placeholder="Email">
                            </div>
                        </div>

                        <label for="password">Пароль</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Пароль">
                            </div>
                        </div>

                        <label for="password">Повторите пароль</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Повторите Пароль">
                            </div>
                        </div>

                        <select class="form-control" name="roles[]" multiple>
                            <?php if(!empty($roles)): ?>
                                <?php $__currentLoopData = $roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $role): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($role->id); ?>"
                                            <?php if(!empty($user->roles)): ?>
                                                <?php $__currentLoopData = $user->roles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $r): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <?php if($role->id == $r->id): ?>
                                                        selected
                                                    <?php endif; ?>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                    ><?php echo e($role->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php endif; ?>
                        </select>

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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/users/edit.blade.php ENDPATH**/ ?>