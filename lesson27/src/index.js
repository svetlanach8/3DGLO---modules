import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validation from "./modules/validation";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import scroll from "./modules/scroll";
import sendForm from "./modules/sendForm";

timer('20 August 2022');
menu();
modal();
validation();
tabs();
slider();
calc(100);
scroll();
sendForm({
  formId: ['form1', 'form2', 'form3'],
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
