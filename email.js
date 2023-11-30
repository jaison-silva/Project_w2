function displayValue() {
  // Get the entered value from the input element
  var enteredValue = document.getElementById("inputValue").value;

  // Check if the entered value is a valid email
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredValue)) {
      // Valid email, display in the modal
      document.getElementById("modalBody").innerHTML = "<p>" + enteredValue + "</p>";

      // Show the modal
      var valueModal = new bootstrap.Modal(document.getElementById('valueModal'));
      valueModal.show();
  } else {
      // Invalid email, show an error message or handle as needed
      alert('Invalid email! Please enter a valid email address.');
  }
}
