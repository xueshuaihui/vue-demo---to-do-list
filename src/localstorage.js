const key = "list";
export default {
    get(){
        return JSON.parse(window.localStorage.getItem(key)) || [];
    },
    save(value){
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}