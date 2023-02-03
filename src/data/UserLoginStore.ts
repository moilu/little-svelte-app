import { writable, type Writable } from "svelte/store";

interface User {
    loggedIn: boolean;
    name: string;
}

let _user: Writable<User> = writable({
    loggedIn: false,
    name: ''
});
function login(): void {
    _user.set({
        loggedIn: true,
        name: 'Dr. Svelte'
    });
}

export const user = {
    subscribe: _user.subscribe,
    login,
}