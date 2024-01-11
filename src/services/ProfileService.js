import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { api } from "./AxiosService"

class ProfileService{
    async getProfileById(profileId){
        const response = await api.get(`api/profiles/${profileId}`)
        console.log(response)
        let newProfile = new Profile(response.data)
        AppState.activeProfile = newProfile
    }
}

export const profileService = new ProfileService()