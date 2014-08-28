var app = {
    /**
     * .......
     *
     */
    openTabs: [],
    savedTabs: [],
    historyTabs: [],
    getAllOpenTabs: function(callback) {
        var tabs = [];
        chrome.windows.getAll({
            populate: true
        }, function(windows) {
            for (var i = 0; i < windows.length; i++) {
                for (var t = 0; t < windows[i].tabs.length; t++) {
                    tabs.push(windows[i].tabs[t]);
                }
            }
            return callback(tabs);
        });
    },
    processOpenTabs: function(tabArray) {
        for (var i = 0; i < tabArray.length; i++) {
            console.log(tabArray[i].title, tabArray[i].url);
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    app.getAllOpenTabs(app.processOpenTabs);
});