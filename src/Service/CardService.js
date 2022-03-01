import axios, { Axios } from "axios";

const URL = 'https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json';

export class CardService {

    static getCollaborators() {
        return axios.get(URL)
        .then(function (response) {

            return response;
          })
          .catch(function (error) {
              
            return null;
          })
    }
}