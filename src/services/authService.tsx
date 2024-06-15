import {IAuth} from "../interfaces/authInterface";
import {IRes} from "../types/resType";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {ITokens} from "../interfaces/tokensInterface";

const _accessTokenKey = 'access'
const _refreshTokenKey = 'refresh'
const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user)
    },
    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data)
        const {data: me} = await this.me();
        return me
    },
    async refresh(): Promise<void> {
        const refreshToken = this.getRefreshToken();
        const {data} = await apiService.post(urls.auth.refresh, {refresh: refreshToken});
        this.setTokens(data)
    },
    me(): IRes<IUser> {
        return apiService.get(urls.auth.me)
    },
    setTokens({refresh, access}: ITokens): void {
        localStorage.setItem(_accessTokenKey, access)
        localStorage.setItem(_refreshTokenKey, refresh)
    },

    getAccessToken(): string {
        return localStorage.getItem(_accessTokenKey)
    },

    getRefreshToken(): string {
        return localStorage.getItem(_refreshTokenKey)
    },

    deleteTokens(): void {
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    }
}

export {
    authService
}