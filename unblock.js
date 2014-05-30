(function () {
    var article = document.getElementsByClassName("entry-content single")[0].innerHTML;
    var iframeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                if (mutation.addedNodes[i].className.match('fancybox-overlay')) {
                    mutation.addedNodes[i].style.display = "none";
                    document.body.classList.remove('fancybox-lock');
                    var entryContent = document.getElementsByClassName("entry-content single")[0];
                    var contentObserver = new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            for (var i = 0; i < mutation.addedNodes.length; i++) {
                                if (mutation.addedNodes[i].className == 'entry-body') {
                                    var entryBody = mutation.addedNodes[i];
                                    entryBody.setAttribute('style', 'display:inline !important');
                                    entryContent.setAttribute('style', 'display:inline !important');
                                }
                            };
                        });
                    });
                    contentObserver.observe(entryContent,  {childList: true, characterData: true });
                    entryContent.innerHTML = article;
                }
            }
        });
    });
    var pageWrapper = document.getElementById('page-wrapper');
    iframeObserver.observe(pageWrapper, {childList: true});
})();
