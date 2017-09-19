require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    // Define global search engine
    function LunrSearchEngine() {
        this.index = null;
        this.store = {};
        this.name = 'LunrSearchEngine';
    }

    // Initialize lunr by fetching the search index
    LunrSearchEngine.prototype.init = function() {
        var that = this;
        var d = $.Deferred();

        $.getJSON(gitbook.state.basePath+'/search_index.json')
        .then(function(data) {
            // eslint-disable-next-line no-undef
            that.index = lunr.Index.load(data.index);
            that.store = data.store;
            d.resolve();
        });

        return d.promise();
    };

    // Search for a term and return results
    LunrSearchEngine.prototype.search = function(q, offset, length) {
        var that = this;
        var results = [];

        if (this.index) {
            results = $.map(this.index.search(q), function(result) {
                var doc = that.store[result.ref];

                return {
                    title: doc.title,
                    url: doc.url,
                    body: doc.summary || doc.body
                };
            });
        }

        return $.Deferred().resolve({
            query: q,
            results: results.slice(0, length),
            count: results.length
        }).promise();
    };

    // Set gitbook research
    gitbook.events.bind('start', function(e, config) {
        var engine = gitbook.search.getEngine();
        if (!engine) {
            gitbook.search.setEngine(LunrSearchEngine, config);
        }
    });
});
