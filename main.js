(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{m:()=>g});var t=function(e,t,o,r){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),p=c.querySelector(".card__image"),u=c.querySelector(".card__title"),a=c.querySelector(".card__delete-button"),d=c.querySelector(".card__like-button");return d.addEventListener("click",(function(){return o(d)})),p.src=e,p.alt=t,u.textContent=t,p.addEventListener("click",(function(){return r(e,t)})),a.addEventListener("click",n),c};function n(e){e.target.closest(".card").remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")})),document.addEventListener("keydown",c)}function c(e){"Escape"===e.key&&p(document.querySelector(".popup_is-opened"))}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}var u=document.forms["new-place"],a=document.querySelector(".popup_type_new-card"),d=document.querySelector(".popup_type_edit"),i=document.querySelector(".places__list"),s=document.forms["edit-profile"],l=document.querySelector(".profile__title"),_=u.querySelector(".popup__input_type_card-name"),m=s.querySelector(".popup__input_type_description"),y=u.querySelector(".popup__input_type_url"),v=s.querySelector(".popup__input_type_name"),f=document.querySelector(".profile__description"),k=document.querySelector(".popup_type_image"),q=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button");function g(e,t){r(k);var n=k.querySelector(".popup__image");n.src=e,n.alt=t,k.querySelector(".popup__caption").textContent=t}q.addEventListener("click",(function(){r(d),v.value=l.textContent,m.value=f.textContent})),S.addEventListener("click",(function(){r(a)})),s.addEventListener("submit",(function(e){e.preventDefault(),l.textContent=v.value,f.textContent=m.value,p(d)})),u.addEventListener("submit",(function(e){e.preventDefault();var n=t(y.value,_.value,o,g);i.prepend(n),p(a),u.reset()})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var n=t(e.link,e.name,o,g);i.append(n)})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&p(e),t.target.classList.contains("popup__close")&&p(e)}))}))})();