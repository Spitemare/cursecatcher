(function($, undefined) {

    function get() {
        return $.Deferred(function(dfd) {
            chrome.storage.sync.get({
                signatures : true,
                avatars : true
            }, function(items) {
                dfd.resolve(items);
            });
        }).promise();
    }

    $(function() {
        var signatures = $('#form-field-show-smilies').clone().attr('id', 'form-field-show-signatures');
        signatures.find('input').attr('id', 'field-show-signatures').change(function() {
            var checked = $(this).prop('checked');
            chrome.storage.sync.set({ signatures : checked });
        });
        signatures.find('label').attr('for', 'field-show-signatures');
        signatures.find('span').text('Show Signatures');

        var avatars = $('#form-field-show-smilies').clone().attr('id', 'form-field-show-avatars');
        avatars.find('input').attr('id', 'field-show-avatars').change(function() {
            var checked = $(this).prop('checked');
            chrome.storage.sync.set({ avatars : checked });
        });
        avatars.find('label').attr('for', 'field-show-avatars');
        avatars.find('span').text('Show Avatars');

        $('#form-field-show-smilies').after(signatures, avatars);

        $.when(get()).done(function(items) {
            $.each(items, function(key, value) {
                $('#field-show-' + key).prop('checked', value);
            });
        });
    });

})(jQuery);
