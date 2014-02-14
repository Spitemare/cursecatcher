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
        $.when(get()).done(function(items) {
            $('.avatar,.p-comment-avatar').toggle(items.avatars);
            $('.p-comment-sig').toggle(items.signatures);
        });
    });

})(jQuery);
