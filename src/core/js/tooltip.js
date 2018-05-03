(function(){

    var ttActivators;

    function onTooltipEnter(e) {
        showTooltip(e.target);
    }

    function onTooltipLeave(e) {
        if (e.target.tooltipElement) {
            Apster.UI.hide(e.target.tooltipElement);
        }
    }

    function activateTooltip(element) {
        var style = getComputedStyle(element);
        element.tooltipElement = Apster.Dom.createElement('div.tooltip');
        element.tooltipElement.innerHTML = element.getAttribute('data-tooltip');
        if (style.position == 'static') {
            element.style.position = 'relative';
        }
        element.appendChild(element.tooltipElement);

        element.addEventListener('mouseleave', onTooltipLeave);
    }

    function showTooltip(element) {
        if (!element.tooltipElement) {
            activateTooltip(element);
        }

        Apster.UI.show(element.tooltipElement);
    }

    ttActivators = document.querySelectorAll('[data-tooltip]');
    for (let i = 0; i < ttActivators.length; i++) {
        ttActivators[i].addEventListener('mouseenter', onTooltipEnter);
    }

})();
