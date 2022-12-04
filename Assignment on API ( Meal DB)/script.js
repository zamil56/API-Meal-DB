// get meal list that matches with the ingredients
const input = document.getElementById("search");
input.addEventListener("input", () => {
    const cards = document.getElementsByClassName("card");
    let filter = input.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body");
        if (title.innerText.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    }
})



    let heading = document.getElementById("heading");
    function getMealList() {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.categories) {
                data.categories.forEach(category => {
                    html += `
                            <div class="col-lg-4 col-md-6 d-flex justify-content-center d-sm-flex justify-content-sm-center my-2 goat">
                                <div class="card" style="width: 18rem;" data-id="${category.idCategory}">
                                    <img src="${category.strCategoryThumb}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${category.strCategory}</h5>
                                        <button class="btn btn-success">See Recipe</button>
                                    </div>
                                </div>
                            </div>
                            
                            `;
                });
            }

            heading.innerHTML = html;
        }).catch(error => console.log(error));


}

getMealList();

