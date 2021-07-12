import {action, computed, observable} from "mobx";

//This class is for temporary stores.
class InstantStoreC {
    @observable token = '';
    @action setToken(token){
        this.token = token
    }
    @computed get getToken(){
        return this.token
    }
}

export const InstantStore = new InstantStoreC();