$(function() {
    let selector = $("#extension-list a.btn.btn-primary");
    function openTabs() {
            selector.each(function() {
            let href = $(this).attr('href');
            var win = window.open(href, '_blank');

        });
    }
    function fillForm(){
        const minDelay = 3000; // Minimum delay in milliseconds (3 seconds)
        const maxDelay = 10000; // Maximum delay in milliseconds (5 seconds)

        // Generate a random delay between minDelay and maxDelay
        const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

        // Execute the setTimeout function with the random delay
        setTimeout(function() {
            $('#input-history').val('Updated Description');
            $('form').submit();
        }, randomDelay);        
    }
    if (window.location.search.includes('route=account/extension&')) {
        openTabs();
    }
    if (window.location.search.includes('route=account/extension/edit&')) {
        fillForm();
    }
});