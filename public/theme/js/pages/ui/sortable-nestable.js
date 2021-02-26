$(function () {
    $('.dd').nestable();

    $('.dd').on('change', function () {
        var $this = $(this);
        var serializedData = $($this).nestable('serialize');
        console.log(serializedData)
        $this.parents('div.body').find('textarea').val(serializedData);
    });
});
