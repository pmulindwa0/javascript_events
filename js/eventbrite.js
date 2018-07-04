class EventBrite {
    constructor(){
        this.auth_token = 'NR24EM2Y3YIFU7NDFFWI';
    }
    //fetch categories from the api.
    async getCategoriesAPI() {
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }

    // search query for the events
    async queryAPI(eventName, category){
        const queryResponse = await fetch
        (`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=date&categories=${category}&token=${this.auth_token}`);
        
        const events = await queryResponse.json();
        
        return{
            events
        }
    }
}