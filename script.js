const suggestionsArray = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", 
    "Fig", "Grape", "Honeydew", "Jackfruit", "Kiwi", 
    "Lemon", "Mango", "Nectarine", "Orange", "Papaya", 
    "Quince", "Raspberry", "Strawberry", "Tangerine", "Ugli Fruit"
  ];
  
const searchInput = document.getElementById("searchInput");
const suggestionsDiv = document.getElementById("suggestions");
  
searchInput.addEventListener("input", function() {
    const query = searchInput.value.split(" ").pop().toLowerCase();
    suggestionsDiv.innerHTML = "";

    const filteredSuggestions = suggestionsArray.filter(item => 
      item.toLowerCase().includes(query)
    );

    filteredSuggestions.forEach(item => {
        const suggestionItem = document.createElement("div");
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.textContent = item;

        suggestionItem.addEventListener("click", () => {
            const inputWords = searchInput.value.split(" ");
            inputWords.pop(); 
            inputWords.push(item); 
            searchInput.value = inputWords.join(" ") + " "; 
            suggestionsDiv.innerHTML = ""; 
        });
        suggestionsDiv.appendChild(suggestionItem);
    });
});
  
document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete")) {
        suggestionsDiv.innerHTML = "";
    }
});
  