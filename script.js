document.addEventListener("DOMContentLoaded", function () {
  const offers = document.querySelectorAll(".offer");

  offers.forEach(offer => {
      offer.addEventListener("click", function () {
          // Hide all select boxes in all offers
          document.querySelectorAll(".options").forEach(opt => opt.style.display = "none");

          // Hide all Size & Colour labels
          document.querySelectorAll(".box-size, .box-colour").forEach(label => label.style.display = "none");

          // Remove green border from all offers
          offers.forEach(o => o.style.border = "2px solid gray");

          // Show both select boxes inside the clicked offer
          const options = this.querySelectorAll(".options");
          options.forEach(opt => opt.style.display = "block");

          // Show Size & Colour labels inside the clicked offer
          this.querySelector(".box-size").style.display = "inline-block";
          this.querySelector(".box-colour").style.display = "inline-block";

          // Add green border to the selected offer
          this.style.border = "2px solid green";

          // Select the radio button automatically
          this.querySelector("input[type='radio']").checked = true;
      });
  });
});


