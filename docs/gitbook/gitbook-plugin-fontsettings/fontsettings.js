require(['gitbook', 'jquery'], function(gitbook, $) {
    // Configuration
    var MAX_SIZE       = 4,
        MIN_SIZE       = 0,
        BUTTON_ID;

    // Current fontsettings state
    var fontState;

    // Default themes
    var THEMES = [
        {
            config: 'white',
            text: 'White',
            id: 0
        },
        {
            config: 'sepia',
            text: 'Sepia',
            id: 1
        },
        {
            config: 'night',
            text: 'Night',
            id: 2
        }
    ];

    // Default font families
    var FAMILIES = [
        {
            config: 'serif',
            text: 'Serif',
            id: 0
        },
        {
            config: 'sans',
            text: 'Sans',
            id: 1
        }
    ];

    // Return configured themes
    function getThemes() {
        return THEMES;
    }

    // Modify configured themes
    function setThemes(themes) {
        THEMES = themes;
        updateButtons();
    }

    // Return configured font families
    function getFamilies() {
        return FAMILIES;
    }

    // Modify configured font families
    function setFamilies(families) {
        FAMILIES = families;
        updateButtons();
    }

    // Save current font settings
    function saveFontSettings() {
        gitbook.storage.set('fontState', fontState);
        update();
    }

    // Increase font size
    function enlargeFontSize(e) {
        e.preventDefault();
        if (fontState.size >= MAX_SIZE) return;

        fontState.size++;
        saveFontSettings();
    }

    // Decrease font size
    function reduceFontSize(e) {
        e.preventDefault();
        if (fontState.size <= MIN_SIZE) return;

        fontState.size--;
        saveFontSettings();
    }

    // Change font family
    function changeFontFamily(configName, e) {
        if (e && e instanceof Event) {
            e.preventDefault();
        }

        var familyId = getFontFamilyId(configName);
        fontState.family = familyId;
        saveFontSettings();
    }

    // Change type of color theme
    function changeColorTheme(configName, e) {
        if (e && e instanceof Event) {
            e.preventDefault();
        }

        var $book = gitbook.state.$book;

        // Remove currently applied color theme
        if (fontState.theme !== 0)
            $book.removeClass('color-theme-'+fontState.theme);

        // Set new color theme
        var themeId = getThemeId(configName);
        fontState.theme = themeId;
        if (fontState.theme !== 0)
            $book.addClass('color-theme-'+fontState.theme);

        saveFontSettings();
    }

    // Return the correct id for a font-family config key
    // Default to first font-family
    function getFontFamilyId(configName) {
        // Search for plugin configured font family
        var configFamily = $.grep(FAMILIES, function(family) {
            return family.config == configName;
        })[0];
        // Fallback to default font family
        return (!!configFamily)? configFamily.id : 0;
    }

    // Return the correct id for a theme config key
    // Default to first theme
    function getThemeId(configName) {
        // Search for plugin configured theme
        var configTheme = $.grep(THEMES, function(theme) {
            return theme.config == configName;
        })[0];
        // Fallback to default theme
        return (!!configTheme)? configTheme.id : 0;
    }

    function update() {
        var $book = gitbook.state.$book;

        $('.font-settings .font-family-list li').removeClass('active');
        $('.font-settings .font-family-list li:nth-child('+(fontState.family+1)+')').addClass('active');

        $book[0].className = $book[0].className.replace(/\bfont-\S+/g, '');
        $book.addClass('font-size-'+fontState.size);
        $book.addClass('font-family-'+fontState.family);

        if(fontState.theme !== 0) {
            $book[0].className = $book[0].className.replace(/\bcolor-theme-\S+/g, '');
            $book.addClass('color-theme-'+fontState.theme);
        }
    }

    function init(config) {
        // Search for plugin configured font family
        var configFamily = getFontFamilyId(config.family),
            configTheme = getThemeId(config.theme);

        // Instantiate font state object
        fontState = gitbook.storage.get('fontState', {
            size:   config.size || 2,
            family: configFamily,
            theme:  configTheme
        });

        update();
    }

    function updateButtons() {
        // Remove existing fontsettings buttons
        if (!!BUTTON_ID) {
            gitbook.toolbar.removeButton(BUTTON_ID);
        }

        // Create buttons in toolbar
        BUTTON_ID = gitbook.toolbar.createButton({
            icon: 'fa fa-font',
            label: 'Font Settings',
            className: 'font-settings',
            dropdown: [
                [
                    {
                        text: 'A',
                        className: 'font-reduce',
                        onClick: reduceFontSize
                    },
                    {
                        text: 'A',
                        className: 'font-enlarge',
                        onClick: enlargeFontSize
                    }
                ],
                $.map(FAMILIES, function(family) {
                    family.onClick = function(e) {
                        return changeFontFamily(family.config, e);
                    };

                    return family;
                }),
                $.map(THEMES, function(theme) {
                    theme.onClick = function(e) {
                        return changeColorTheme(theme.config, e);
                    };

                    return theme;
                })
            ]
        });
    }

    // Init configuration at start
    gitbook.events.bind('start', function(e, config) {
        var opts = config.fontsettings;

        // Generate buttons at start
        updateButtons();

        // Init current settings
        init(opts);
    });

    // Expose API
    gitbook.fontsettings = {
        enlargeFontSize: enlargeFontSize,
        reduceFontSize:  reduceFontSize,
        setTheme:        changeColorTheme,
        setFamily:       changeFontFamily,
        getThemes:       getThemes,
        setThemes:       setThemes,
        getFamilies:     getFamilies,
        setFamilies:     setFamilies
    };
});


