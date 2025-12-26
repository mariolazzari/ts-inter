const someEl: HTMLInputElement | null = document.querySelector(".foo");
if (someEl) {
  console.log(someEl.value);

  someEl.addEventListener("blur", (event: FocusEvent) => {
    const target = event.target as HTMLInputElement;
    console.log("Blurred:", target.value);
  });
}
