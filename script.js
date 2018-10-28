;(function TimeThisPerformance() {
    let start = new Date().getTime();
    window.onload = () => {
        setTimeout(() => {
            let t = performance.timing;

            console.log('Speed of selection is: ' + (t.loadEventEnd - t.responseEnd) + ' milliseconds');

            let now = new Date().getTime();
            let latency = now - start;
            console.log('Page loading time: ' + latency + ' milliseconds');

            let page_load_time = now - performance.timing.navigationStart;
            console.log('User-perceived page loading time: ' + page_load_time + ' milliseconds');

        }, 0);

        let itemCountShowEl = document.getElementById('item-count');
        let itemCount = document.getElementsByClassName('js-item').length;

        itemCountShowEl.innerHTML = itemCount;
    };
})();

