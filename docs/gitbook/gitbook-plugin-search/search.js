require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
    var MAX_RESULTS = 15;
    var MAX_DESCRIPTION_SIZE = 500;

    var usePushState = (typeof history.pushState !== 'undefined');

    // DOM Elements
    var $body = $('body');
    var $bookSearchResults;
    var $searchInput;
    var $searchList;
    var $searchTitle;
    var $searchResultsCount;
    var $searchQuery;

    // Throttle search
    function throttle(fn, wait) {
        var timeout;

        return function() {
            var ctx = this, args = arguments;
            if (!timeout) {
                timeout = setTimeout(function() {
                    timeout = null;
                    fn.apply(ctx, args);
                }, wait);
            }
        };
    }

    function displayResults(res) {
        $bookSearchResults.addClass('open');

        var noResults = res.count == 0;
        $bookSearchResults.toggleClass('no-results', noResults);

        // Clear old results
        $searchList.empty();

        // Display title for research
        $searchResultsCount.text(res.count);
        $searchQuery.text(res.query);

        // Create an <li> element for each result
        res.results.forEach(function(res) {
            var $li = $('<li>', {
                'class': 'search-results-item'
            });

            var $title = $('<h3>');

            var $link = $('<a>', {
                'href': gitbook.state.basePath + '/' + res.url,
                'text': res.title
            });

            var content = res.body.trim();
            if (content.length > MAX_DESCRIPTION_SIZE) {
                content = content.slice(0, MAX_DESCRIPTION_SIZE).trim()+'...';
            }
            var $content = $('<p>').html(content);

            $link.appendTo($title);
            $title.appendTo($li);
            $content.appendTo($li);
            $li.appendTo($searchList);
        });
    }

    function launchSearch(q) {
        // Add class for loading
        $body.addClass('with-search');
        $body.addClass('search-loading');

        // Launch search query
        throttle(gitbook.search.query(q, 0, MAX_RESULTS)
        .then(function(results) {
            displayResults(results);
        })
        .always(function() {
            $body.removeClass('search-loading');
        }), 1000);
    }

    function closeSearch() {
        $body.removeClass('with-search');
        $bookSearchResults.removeClass('open');
    }

    function launchSearchFromQueryString() {
        var q = getParameterByName('q');
        if (q && q.length > 0) {
            // Update search input
            $searchInput.val(q);

            // Launch search
            launchSearch(q);
        }
    }

    function bindSearch() {
        // Bind DOM
        $searchInput        = $('#book-search-input input');
        $bookSearchResults  = $('#book-search-results');
        $searchList         = $bookSearchResults.find('.search-results-list');
        $searchTitle        = $bookSearchResults.find('.search-results-title');
        $searchResultsCount = $searchTitle.find('.search-results-count');
        $searchQuery        = $searchTitle.find('.search-query');

        // Launch query based on input content
        function handleUpdate() {
            var q = $searchInput.val();

            if (q.length == 0) {
                closeSearch();
            }
            else {
                launchSearch(q);
            }
        }

        // Detect true content change in search input
        // Workaround for IE < 9
        var propertyChangeUnbound = false;
        $searchInput.on('propertychange', function(e) {
            if (e.originalEvent.propertyName == 'value') {
                handleUpdate();
            }
        });

        // HTML5 (IE9 & others)
        $searchInput.on('input', function(e) {
            // Unbind propertychange event for IE9+
            if (!propertyChangeUnbound) {
                $(this).unbind('propertychange');
                propertyChangeUnbound = true;
            }

            handleUpdate();
        });

        // Push to history on blur
        $searchInput.on('blur', function(e) {
            // Update history state
            if (usePushState) {
                var uri = updateQueryString('q', $(this).val());
                history.pushState({ path: uri }, null, uri);
            }
        });
    }

    gitbook.events.on('page.change', function() {
        bindSearch();
        closeSearch();

        // Launch search based on query parameter
        if (gitbook.search.isInitialized()) {
            launchSearchFromQueryString();
        }
    });

    gitbook.events.on('search.ready', function() {
        bindSearch();

        // Launch search from query param at start
        launchSearchFromQueryString();
    });

    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function updateQueryString(key, value) {
        value = encodeURIComponent(value);

        var url = window.location.href;
        var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi'),
            hash;

        if (re.test(url)) {
            if (typeof value !== 'undefined' && value !== null)
                return url.replace(re, '$1' + key + '=' + value + '$2$3');
            else {
                hash = url.split('#');
                url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
        }
        else {
            if (typeof value !== 'undefined' && value !== null) {
                var separator = url.indexOf('?') !== -1 ? '&' : '?';
                hash = url.split('#');
                url = hash[0] + separator + key + '=' + value;
                if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                    url += '#' + hash[1];
                return url;
            }
            else
                return url;
        }
    }
});
