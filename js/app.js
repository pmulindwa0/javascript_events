const eventbrite = new EventBrite();
const ui = new UI();

document.getElementById('submitBtn').addEventListener('click', (e)=>{
    e.preventDefault();

    //get form values
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    if (eventName !=='') {
        eventbrite.queryAPI(eventName, category)
        .then(events =>{
            const eventsList = events.events.events;
            if (eventsList.length > 0) {
                //print events
                ui.displayEvents(eventsList);

            }else{
                //no event, show a message
                ui.printMessage('No results found!', 'text-center alert alert-danger mt-4');
            }
 
        })
        
    }else{
        // print a message
        ui.printMessage('Add an event or city', 'text-center alert alert-danger mt-4');
    }
})