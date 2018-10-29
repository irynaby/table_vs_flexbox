;(function TimeThisPerformance() {
    var start = new Date().getTime();
    window.onload = function() {
        setTimeout(function() {
            var t = performance.timing;

            console.log('Speed of selection is: ' + (t.loadEventEnd - t.responseEnd) + ' milliseconds');

            var now = new Date().getTime();
            var latency = now - start;
            console.log('Page loading time: ' + latency + ' milliseconds');

            var page_load_time = now - performance.timing.navigationStart;
            console.log('User-perceived page loading time: ' + page_load_time + ' milliseconds');

        }, 0);

        var itemCountShowEl = document.getElementById('item-count');
        var itemCount = document.getElementsByClassName('js-item').length;

        itemCountShowEl.innerHTML = itemCount;
    };
})();

