document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".project-category");
    const buttons = document.querySelectorAll(".category-btn");

    function showCategory(categoryId) {
        categories.forEach(category => {
            if (category.id === categoryId) {
                category.classList.remove("hidden");
            } else {
                category.classList.add("hidden");
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const categoryId = button.getAttribute("onclick").match(/'(.*?)'/)[1];
            showCategory(categoryId);
        });
    });
});
