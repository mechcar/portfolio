const contactForm = document.querySelector("form");

const clearForm = () => {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";
};

handleSubmit = (e) => {
	e.preventDefault();

	const formData = new FormData(contactForm);
	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => {
			// Get the modal
			const modal = document.getElementById("messageConfirmation");

			// Get the <span> element that closes the modal
			const span = document.getElementsByClassName("close")[0];
	
			modal.style.display = "block";
		
			// When the user clicks on <span> (x), close the modal
			span.onclick = function () {
				modal.style.display = "none";
			};

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};

			clearForm();
		})
		.catch((error) => {
			console.log(error.message);
		});
};

contactForm.addEventListener("submit", handleSubmit);
