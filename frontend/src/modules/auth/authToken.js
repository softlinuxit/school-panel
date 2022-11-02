import Cookies from 'universal-cookie';
let inMemoryToken = null
const cookies = new Cookies();

export class AuthToken {

    static async get() {
        return (
            inMemoryToken || cookies.get('jwt') || null
        );
    }

    static async set(token, rememberMe) {
        if (rememberMe) {
            cookies.set('jwt', token, { path: '/' })
        } else {
            inMemoryToken = token;
            cookies.remove('jwt')
        }
    }
    static async remove() {
        cookies.remove('jwt')
    }
}
