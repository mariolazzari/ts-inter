const zero = 0;
const falsy = false;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
type CardinalDirection = "North" | "East" | "South" | "West";

function animate(ease: Easing) {
  switch (ease) {
    case "ease-in":
      console.log("Animating with ease-in");
      break;
    case "ease-out":
      console.log("Animating with ease-out");
      break;
    case "ease-in-out":
      console.log("Animating with ease-in-out");
      break;
  }
}

animate("ease-in");
