
/**
 * WebGraph
 */

function WebGraph () {
    this.nodes = new Map();
    this.linksFrom = new Map();
    this.linksTo = new Map();
}

WebGraph.prototype.hasNode = function (url) {
    return this.nodes.has(url);
}

WebGraph.prototype.addNode = function (url) {
    return this.nodes[url] = new PageNode(url);
}

WebGraph.prototype.getNode = function (url) {
    return this.nodes[url] || null;
}

WebGraph.prototype.addLink = function (sourceUrl, destUrl) {
    if(!this.linksFrom.has(sourceUrl)) this.linksFrom[sourceUrl] = new Set();
    if(!this.linksTo.has(destUrl)) this.linksTo[sourceUrl] = new Set();
    this.linksFrom[sourceUrl].add(destUrl);
    this.linksTo[destUrl].add(sourceUrl);
}

function PageNode (url) {
    this.url = url;
    this.request_method = null;
    this.statusCode = null;
    this.contents = null;
    this.error = null;
}

module.exports = WebGraph;

