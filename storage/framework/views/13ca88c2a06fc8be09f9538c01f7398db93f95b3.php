<ol>
    <?php $__currentLoopData = $childs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $child): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="dd-item dd3-item" data-id="<?php echo e($child->id); ?>">
            <div class="dd-handle dd3-handle"></div>
            <div class="dd3-content"><?php echo e($child->name); ?></div>
            <?php if($child->children()->exists() && count($child->children)): ?>
                <?php echo $__env->make('Admin.pages.categories.tree',['childs' => $child->children], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <?php endif; ?>
        </li>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</ol>

<?php /**PATH /var/www/html/disfood/resources/views/Admin/pages/categories/tree.blade.php ENDPATH**/ ?>