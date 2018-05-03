var Apster = {};

Apster.Dom = {
    createElement: function(spec, attrs, style) {
        var match, match2, tagName = 'div', el;

        if (match = spec.match(/^([a-zA-Z][a-zA-Z\-_:]*)/)) {
            tagName = match[1];
        }

        el = document.createElement(tagName);

        match = spec.match(/#([a-zA-Z][a-zA-Z0-9\-_:]*)/);
        if (match) {
            el.id = match[1];
        }

        match = spec.match(/(\.[a-zA-Z][a-zA-Z0-9\-_:.]*)+/);
        if (match) {
            el.className = match[0].substr(1).replace(/\./g, ' ');
        }

        match = spec.match(/\[[^=]+="[^"]*"\]/g);
        if (match) {
            for (i = 0; i < match.length; i++) {
                match2 = match[i].match(/\[([^=]+)="([^"]*)"\]/);
                el.setAttribute(match2[1], match2[2]);
            }
        }

        if (attrs) {
            for (let key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }

        if (style) {
            for (let key in style) {
                el.style[key] = style[key];
            }
        }

        return el;
    }
};

Apster.UI = {
    show: function(element, visibleClass, showingClass) {
        visibleClass = visibleClass||'visible';
        showingClass = showingClass||'showing';

        element.classList.add(showingClass);
        setTimeout(function(){
            element.classList.add(visibleClass);
            setTimeout(function(){
                element.classList.remove(showingClass);
            }, 300);
        });
    },
    hide: function(element, visibleClass, hidingClass) {
        visibleClass = visibleClass||'visible';
        hidingClass = hidingClass||'hiding';

        element.classList.add(hidingClass);
        setTimeout(function(){
            element.classList.remove(visibleClass);
            setTimeout(function(){
                element.classList.remove(hidingClass);
            }, 300);
        });
    }
};
