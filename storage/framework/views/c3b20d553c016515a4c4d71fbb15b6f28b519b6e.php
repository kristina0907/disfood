<?php $__env->startSection('content'); ?>

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Категории
                        <a href="/superadmin/categories/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#home_only_icon_title" data-toggle="tab">
                                <i class="material-icons">list</i>
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#profile_only_icon_title" data-toggle="tab">
                                <i class="material-icons">sort</i>
                            </a>
                        </li>
                    </ul>

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
                                                <th>Название категории</th>
                                                <th>slug</th>
                                                <th>Родитель</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название категории</th>
                                                <th>slug</th>
                                                <th>Родитель</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            <?php if(!empty($categories)): ?>
                                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <tr role="row" class="odd">
                                                        <td><?php echo e($category->id); ?></td>
                                                        <td><?php echo e($category->name); ?></td>
                                                        <td><?php echo e($category->slug); ?></td>
                                                        <td>
                                                            <?php if($category->parent_id): ?>
                                                                <span class="badge bg-green"><?php echo e($category->parent->name); ?></span>
                                                            <?php else: ?>
                                                                <span class="badge bg-red">Нет</span>
                                                            <?php endif; ?>
                                                        </td>
                                                        <td><?php echo e($category->created_at); ?></td>
                                                        <td>
                                                            <a href="/superadmin/categories/edit/<?php echo e($category->id); ?>" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/categories/delete/<?php echo e($category->id); ?>" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
                        <div role="tabpanel" class="tab-pane fade" id="profile_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="clearfix m-b-20">
                                        <div class="dd nestable-with-handle">
                                            <ol class="dd-list">
                                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <?php if(!empty($cat) && $cat->parent_id === 0): ?>
                                                        <li class="dd-item dd3-item" data-id="<?php echo e($cat->id); ?>">
                                                            <div class="dd-handle dd3-handle"></div>
                                                            <div class="dd3-content"><?php echo e($cat->name); ?></div>
                                                        </li>
                                                        <?php if(count($cat->children)): ?>
                                                            <?php echo $__env->make('Admin.pages.categories.tree',['childs' => $cat->children], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                                        <?php endif; ?>
                                                    <?php endif; ?>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </ol>
                                        </div>
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

<?php echo $__env->make('Admin.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/categories/show.blade.php ENDPATH**/ ?>