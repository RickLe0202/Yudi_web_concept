const MOCK_USER = {
    email: 'test@yudi.ai',
    password: '123456',
  }
  
  export function login(email: string, password: string): boolean {
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      localStorage.setItem('yudi_logged_in', 'true')
      return true
    }
    return false
  }
  
  export function register(email: string, password: string): boolean {
    //Pretended as successfully registered
    localStorage.setItem('yudi_logged_in', 'true')
    return true
  }
  
  export function logout() {
    localStorage.removeItem('yudi_logged_in')
  }
  
  export function isLoggedIn(): boolean {
    return localStorage.getItem('yudi_logged_in') === 'true'
  }
  