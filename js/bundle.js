// Document Ready
$(function(){
    var progressTarget = $('#progressTarget'),
        progressBar = $('#progressBar'),
        progressInfoMsg = $('#progressInfo')
        reachedValue = progressBar.data('reached'),
        targetValue = progressTarget.data('target');

    // Update target text
    progressTarget.append('$'+targetValue);

    // Compute width % of progress, if it's more than 100%, max-width css will overwrite
    progressBar.css('width',((100/targetValue)*reachedValue)+'%')
        .find('label').append('$'+reachedValue);

    // Update progress message based on the reached value and the target value
    reachedValue < targetValue ? progressInfoMsg.append('You need $'+(targetValue - reachedValue)+' more to reach your target.') 
        : progressInfoMsg.append('Congrats you have reach your target.');
});