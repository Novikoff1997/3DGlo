import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import validate from "./modules/validate";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";

timer("20 february 2025");
menu();
modal();
scroll();
validate();
tabs();
slider(".portfolio-content", ".portfolio-item", "dot-active", "portfolio-item-active");
calc(100);
