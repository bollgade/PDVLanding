import * as blgFunctions from "./modules/functions.js";

blgFunctions.isWebp();
blgFunctions.ibg();

function radioCheck() {
   const form = document.querySelector(".votes__form");
   const radioBlocks = form.querySelectorAll('.votes-form__radio-block');

   // add .active to 'checked' block in start
   function startActive() {
      // radioBlocks.forEach(element => {
      //    if (element.querySelector('input').hasAttribute('checked')) {
      //       element.classList.add('active')
      //    }
      // });
      form.querySelector('input:checked').closest('.votes-form__radio-block').classList.add('active');
   }
   startActive();

   form.addEventListener('click', function (event) {
      const radioBlock = event.target.closest('.votes-form__radio-block');
      if (radioBlock) {
         const input = radioBlock.querySelector('input');
         if (radioBlock.classList.contains('active')) {
            return false;
         } else {
            radioBlocks.forEach(element => {
               if (element.querySelector('input').hasAttribute('checked')) {
                  element.classList.remove('active')
                  element.querySelector('input').removeAttribute('checked');
               }
            })
            input.setAttribute('checked', true);
            radioBlock.classList.add('active');
         }
      }
      return false;
   })
}
radioCheck();