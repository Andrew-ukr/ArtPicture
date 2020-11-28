import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  modals();
  sliders('.feedback', '.feedback-slider-item', 'main-next-btn', 'main-prev-btn', 3000);
  sliders('.main-slider', '.main-slider-item', '', '', 3000);
  forms();
}); 