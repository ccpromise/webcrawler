
const WebGraph = require('./WebGraph');
const url = require('url');
/**
 * WebCrawler: how to write document?
 */
function WebCrawler (maxRunningTask) {
    this._maxRunningTask = maxRunningTask;
    this._runningTask = 0;
    this._domain = '';
    this._queue = [];
    this._graph = new WebGraph();
    this._errors = [];
}

WebCrawler.prototype.crawl = function (initUrl, callback) {
    this._domain = url.parse(initUrl).hostname; // ??
    this.addTask(initUrl);

    var checkIfDone = function () {
        setTimeout(function() {
            if(this._runningTask === 0 && this._queue.length === 0) {
                console.log('Done!');
                if(this._errors.length === 0) {
                    console.log('No error!');
                } else {
                    console.log('Here are all errors found: ');
                    this._errors.forEach(console.log);
                }
                callback(this._graph);
            } else {
                checkIfDone();
            }
        }, 1000);
    }
    checkIfDone();
}