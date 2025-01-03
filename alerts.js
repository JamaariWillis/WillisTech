document.addEventListener('DOMContentLoaded', function() {
    // Get the select element for filtering
    const categoryFilter = document.getElementById('category-filter');
    // Get all alert cards
    const alertCards = document.querySelectorAll('.alert-card');
  
    // Add event listener to the select element
    categoryFilter.addEventListener('change', function() {
      const selectedCategory = categoryFilter.value;
  
      // Iterate over each alert card
      alertCards.forEach(function(card) {
        // Get the category of the alert card
        const category = card.dataset.category;
  
        // Show or hide the alert card based on the selected category
        if (selectedCategory === 'all' || selectedCategory === category) {
          card.style.display = 'block'; // Show the card
        } else {
          card.style.display = 'none'; // Hide the card
        }
      });
    });
  });
  