(function (api) {
    api.sectionConstructor["upsell"] = api.Section.extend({
        // No events for this type of section.
        attachEvents: function () {
        },

        // Always make the section active.
        isContextuallyActive: function () {
            return true;
        },
    });
})(wp.customize);

// document.addEventListener('DOMContentLoaded', function () {
//     // MultiCheckbox
//     let checkboxes = document.querySelectorAll('.customize-control-checkbox-multiple input[type="checkbox"]');
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener("change", function () {
//             let parentControl = this.closest(".customize-control"),
//                 checkbox_values = Array.from(parentControl.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(",");
//             parentControl.querySelector('input[type="hidden"]').value = checkbox_values;
//             parentControl.querySelector('input[type="hidden"]').dispatchEvent(new Event("change"));
//         });
//     });
// });
jQuery(document).ready(function ($) {
    // MultiCheckbox
    jQuery('.customize-control-checkbox-multiple input[type="checkbox"]').on(
        "change",
        function () {
            let checkbox_values = jQuery(this)
                .parents(".customize-control")
                .find('input[type="checkbox"]:checked')
                .map(function () {
                    return this.value;
                })
                .get()
                .join(",");

            jQuery(this)
                .parents(".customize-control")
                .find('input[type="hidden"]')
                .val(checkbox_values)
                .trigger("change");
        }
    );
});
