<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title><?php echo e(env('APP_NAME')); ?></title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="<?php echo e(mix('/css/app.css')); ?>">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    </head>
    <body>
      <div id="app">
          <app></app>
      </div>

        <script src="<?php echo e(mix('/js/app.js')); ?>"></script>
    </body>
</html>
<?php /**PATH /var/www/html/disfood/resources/views/welcome.blade.php ENDPATH**/ ?>