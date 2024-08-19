/* global wp, jQuery */
document.addEventListener('DOMContentLoaded', function () {
    const selectors = {
        siteTitle: '.site-title',
        siteDesc: '.site-description',
        siteTitleA: '.site-title a',
        themeHeaderColor: '.site-header',
        themeHeaderColorA: '.site-header a:not(:hover):not(:focus)',
    };

    function updateText(selector, value) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = value;
        }
    }

    function updateColor(selector, value) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            elements.forEach(function (element) {
                element.style.color = value;
            });
        }
    }

    function updateClipAndPosition(selector, clipValue, positionValue) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.clip = clipValue;
            element.style.position = positionValue;
        }
    }

    wp.customize('blogname', function (value) {
        value.bind(function (to) {
            updateText(selectors.siteTitleA, to);
        });
    });

    wp.customize('blogdescription', function (value) {
        value.bind(function (to) {
            updateText(selectors.siteDesc, to);
        });
    });

    wp.customize('header_textcolor', function (value) {
        value.bind(function (to) {
            if ('blank' === to) {
                updateClipAndPosition(selectors.siteTitle, 'rect(1px, 1px, 1px, 1px)', 'static');
                updateClipAndPosition(selectors.siteDesc, 'rect(1px, 1px, 1px, 1px)', 'static');
            } else {
                updateClipAndPosition(selectors.siteTitle, 'auto', 'relative');
                updateClipAndPosition(selectors.siteDesc, 'auto', 'relative');
                updateColor(selectors.siteTitleA, to);
                updateColor(selectors.siteDesc, to);
                updateColor(selectors.themeHeaderColor, to);
                updateColor(selectors.themeHeaderColorA, to);
            }
        });
    });
});