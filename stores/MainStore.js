import {observable, action, computed} from "mobx";
import {AsyncStorage} from "react-native"
import {create, persist} from "mobx-persist";

// This class for permanent stores.
class MainStoreC {
    @persist @observable language = "tr-TR"
    @persist @observable token = '';

    @action setToken(token){
        this.token = token
    }

    @computed get getToken(){
        return this.token
    }

    @action setLanguage(lang){
        this.language = lang
    }

    @computed get getLanguage(){
        return this.language
    }
}

const hydrate = create({storage: AsyncStorage});
export const MainStore = new MainStoreC();
hydrate("MainStore", MainStore).then(() => console.info("Main Store has been hydrated!"));