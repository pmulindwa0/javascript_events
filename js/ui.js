class UI {
    constructor(){
        this.init();
    }
    init(){
        this.printCategories();
        this.result = document.getElementById('result');
    }
    printCategories(){
        let categoriesList = eventbrite.getCategoriesAPI()
        .then(categories => {
            
            let categoriesList = categories.categories.categories;

            //getting the category select html element
            const categoriesSelect = document.querySelector('#category');
            categoriesList.forEach(category => {
                // creating the option
                const option = document.createElement('option');
                option.value = category.id;
                option.appendChild(document.createTextNode(category.name));

                categoriesSelect.appendChild(option);
            });
        });

    }
    displayEvents(events){
        // build the template
        let HTMLTemplate = '';

        //loop through events and print info
        events.forEach(eventInfo => {
            HTMLTemplate += `
                <div class="col-md-4 mt-4">
                        <div class="card">
                            <div class="card-body">
                                <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}"> 
                            </div>
                            <div class="card-body">
                                <div class="card-text">
                                    <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                    <p class="lead text-info">Event Information:</p>
                                    <p>${eventInfo.description.text.substring(0,200)}...</p>
                                    <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                    <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                    <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                                </div>
                            </div>
                        </div>
                </div>
            
            `;
        });
        this.result.innerHTML = HTMLTemplate;
    }
    printMessage(message, className){
        const div = document.createElement('div');
        div.className =className;
        div.appendChild(document.createTextNode(message));

        //insert into html
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        //Remove message after 3seconds
        setTimeout(() => {
            this.removeMessage();
        }, 3000);
    }

    removeMessage(){
        const alert = document.querySelector('.alert');

        if(alert){
            alert.remove();
        }
    }
}