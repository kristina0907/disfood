<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание организации
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/organizations/update" method="POST">
                        <?php echo csrf_field(); ?>
                        <input type="hidden" name="id" id="id" value="<?php echo e($organization->id); ?>">
                        <label for="name">Название организации</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="<?php echo e(old('name',$organization->name)); ?>"  placeholder="Введите название организации..." required>
                            </div>
                        </div>

                        <label for="inn">ИНН</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="inn" class="form-control" name="inn" value="<?php echo e(old('name',$organization->inn)); ?>"  placeholder="ИНН" required>
                            </div>
                        </div>

                        <label for="kpp">КПП</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="kpp" class="form-control" name="kpp" value="<?php echo e(old('name',$organization->kpp)); ?>" placeholder="КПП">
                            </div>
                        </div>

                        <label for="ogrn">ОГРН</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="ogrn" class="form-control" name="ogrn" value="<?php echo e(old('name',$organization->ogrn)); ?>" placeholder="ОГРН">
                            </div>
                        </div>

                        <label for="adress">Адрес</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="adress" class="form-control" name="adress" value="<?php echo e(old('name',$organization->adress)); ?>" placeholder="Адрес">
                            </div>
                        </div>

                        <label for="phone">Телефон</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="phone" class="form-control" name="phone" value="<?php echo e(old('name',$organization->phone)); ?>" placeholder="Телефон">
                            </div>
                        </div>

                        <label for="bank_name">Название банка</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="bank_name" class="form-control" name="bank_name" value="<?php echo e(old('name',$organization->bank_name)); ?>" placeholder="Название банка">
                            </div>
                        </div>

                        <label for="r_account">Расчетный счет</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="r_account" class="form-control" name="r_account" value="<?php echo e(old('name',$organization->r_account)); ?>" placeholder="Рассчетный счет">
                            </div>
                        </div>

                        <label for="kor_account">Корреспондентский счёт</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="kor_account" class="form-control" name="kor_account" value="<?php echo e(old('name',$organization->kor_account)); ?>" placeholder="Корреспондентский счёт">
                            </div>
                        </div>

                        <label for="fio_ceo">ФИО руководителя</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="fio_ceo" class="form-control" name="fio_ceo" value="<?php echo e(old('name',$organization->fio_ceo)); ?>" placeholder="ФИО руководителя">
                            </div>
                        </div>

                        <label for="reason">Основание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="reason" id="reason">
                                    <option value="ustav" <?php if($organization->reason == 'ustav'): ?> selected <?php endif; ?>>Устав</option>
                                    <option value="power_of_attorney" <?php if($organization->reason == 'power_of_attorney'): ?> selected <?php endif; ?>>Доверенность</option>
                                </select>
                            </div>
                        </div>

                        <label for="number_power_of_attorney">Номер доверенности</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="number_power_of_attorney" class="form-control" name="number_power_of_attorney" value="<?php echo e(old('name',$organization->number_power_of_attorney)); ?>" placeholder="Номер доверенности">
                            </div>
                        </div>

                        <label for="date_power_of_attorney">Дата доверенности</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="date" id="date_power_of_attorney" class="form-control" name="date_power_of_attorney" value="<?php echo e(old('name',$organization->date_power_of_attorney)); ?>" placeholder="Дата доверенности">
                            </div>
                        </div>

                        <label for="user_id">Аккаунт владельца</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="user_id" id="user_id">
                                    <?php if(!empty($clients)): ?>
                                        <?php $__currentLoopData = $clients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $client): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <option value="<?php echo e($client->id); ?>" <?php if((integer)$client->id === (integer)$organization->user_id): ?> selected <?php endif; ?>><?php echo e($client->name); ?></option>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    <?php endif; ?>
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" name="active" class="filled-in" <?php if($organization->active): ?> checked <?php endif; ?>>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/organizations/edit.blade.php ENDPATH**/ ?>