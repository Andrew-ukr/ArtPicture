import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import seeMore from "./modules/seeMore.js";
import calc from "./modules/calc.js";
import filter from "./modules/filter.js";
import imgChange from "./modules/imgChange.js";
import acardion from "./modules/acardion.js";
import menu from "./modules/menu.js";
import pageUp from "./modules/pageUp.js";

window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  
  let calcData = {};
  modals();
  sliders('.feedback', '.feedback-slider-item', 'main-next-btn', 'main-prev-btn', 3000);
  sliders('.main-slider', '.main-slider-item', '', '', 3000);
  forms(calcData);
  seeMore('.button-styles', '.styles-block');
  calc(calcData);
  filter();
  imgChange();
  acardion();
  menu();
  pageUp();
});