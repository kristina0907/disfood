<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание заказа
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orders/update" method="POST" enctype="multipart/form-data">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" value="<?php echo e($order->id); ?>">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="organization_id">Организация</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="organization_id" id="organization_id">
                                                <?php if(!empty($organizations)): ?>
                                                    <?php $__currentLoopData = $organizations; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $organization): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($organization->id); ?>"
                                                                <?php if($order->organization_id == $organization->id): ?>
                                                                    selected
                                                                <?php endif; ?>
                                                        ><?php echo e($organization->name); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <?php endif; ?>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="user_id">Пользователь</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="user_id" id="user_id">
                                                <?php if(!empty($users)): ?>
                                                    <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($user->id); ?>"
                                                           <?php if($order->user_id == $user->id): ?>
                                                                selected
                                                           <?php endif; ?>
                                                        ><?php echo e($user->name); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <?php endif; ?>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="offer_id">Предложение</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="offer_id" id="offer_id">
                                                <?php if(!empty($offers)): ?>
                                                    <?php $__currentLoopData = $offers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $offer): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($offer->id); ?>"
                                                            <?php if($order->offer_id == $offer->id): ?>
                                                                selected
                                                            <?php endif; ?>
                                                        ><?php echo e($offer->name); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <?php endif; ?>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="col-md-4">
                                        <label for="status_id">Статус</label>
                                        <div class="form-group">
                                            <div class="form-line">
                                                <select name="status_id" id="status_id">
                                                    <?php if(!empty($statuses)): ?>
                                                        <?php $__currentLoopData = $statuses; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $status): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                            <option value="<?php echo e($status->id); ?>"
                                                               <?php if($order->status_id == $status->id): ?>
                                                                    selected
                                                                <?php endif; ?>
                                                            ><?php echo e($status->name); ?></option>
                                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                    <?php endif; ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="cityInput">Откуда(город)</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <?php echo e($order->from->title_ru); ?>

                                            <input type="text" autocomplete="off" id="cityInputFrom" list="cityList" class="form-control" name="from_id" value="<?php echo e($order->from->city_id); ?>" placeholder="Введите название города...">
                                            <datalist id="cityList">

                                            </datalist>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="cityInput">Куда(город)</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <?php echo e($order->delivery->title_ru); ?>

                                            <input type="text" autocomplete="off" id="cityInputTo" list="cityList" class="form-control" name="to_id" value=" <?php echo e($order->delivery->city_id); ?>" placeholder="Введите название города...">
                                            <datalist id="cityList">

                                            </datalist>
                                        </div>
                                    </div>
                                </div>

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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/orders/edit.blade.php ENDPATH**/ ?>