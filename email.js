function displayValue() {
    // Get the entered value from the input element
    var enteredValue = document.getElementById("inputValue").value;

    // Display the entered value in the modal
    document.getElementById("modalBody").innerHTML = "<p>" + enteredValue + "</p>";

    // Show the modal
    var valueModal = new bootstrap.Modal(document.getElementById('valueModal'));
    valueModal.show();
  }