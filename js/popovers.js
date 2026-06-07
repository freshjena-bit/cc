var allPopovers = [];
document.addEventListener("DOMContentLoaded", function(event) {
});


document.addEventListener("click", function(event) {
    var target = event.target;

    if (!target.closest('.popover_container')
        && !target.classList.contains('popover_action')) {
        hide_popovers(allPopovers);
    }
});

function open_popover(event, tooltip_id, position) {
    var container = document.getElementById(tooltip_id);
    var state = container.style.display;

    hide_popovers(allPopovers);

    var action_el = event.target;

    Popper.createPopper(
        action_el,
        container, {
            placement: position,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
                //{ name: 'eventListeners', enabled: false },
            ],
        }
    );
    allPopovers.push(tooltip_id);
    toggle_popover(container, state);
}

function toggle_popover(el, state)
{
  if (state == "none" || state == "") {
      el.style.display = "block";
  } else if (state == "block") {
      el.style.display = "none";
  } else {
      el.style.display = "block";
  }
}

function hide_popovers(elements)
{
  var length = elements.length;
  if (length > 0) {
    for (var i = 0; i < length; i++) {
      document.getElementById(elements[i]).style.display = "none";
    }
  } 
}
