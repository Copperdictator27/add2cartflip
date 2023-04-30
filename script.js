//store variables
let mainButton = $(".main-button");
let heroButtonWrapper = $(".add2cart-button-wrapper");
let fixedButtonWrapper = $(".fixed-add2cart-element-wrap");
let ctaButtonWrapper = $(".fixed-add2cart-element-wrap-abovemenu");

//move button animation
function moveButtonInto(element) {
  let state = Flip.getState(mainButton);
  mainButton.appendTo(element);
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
}

ScrollTrigger.create({
  trigger: heroButtonWrapper,
  start: "top 20%",
  end: "bottom 20%",
  markers: false,
  onLeave: () => moveButtonInto(fixedButtonWrapper),
  onEnterBack: () => moveButtonInto(heroButtonWrapper)
});

ScrollTrigger.create({
  trigger: ctaButtonWrapper,
  start: "top 80%",
  end: "bottom 80%",
  markers: false,
  onEnter: () => moveButtonInto(ctaButtonWrapper),
  onLeaveBack: () => moveButtonInto(fixedButtonWrapper)
});
