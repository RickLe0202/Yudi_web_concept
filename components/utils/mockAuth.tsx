const INITIAL_USERS = [
  {
    email: 'ldd7202@gmail.com',
    password: 'Duongleduy02@',
  },
];

const getStoredUsers = () => {
  if (typeof window === 'undefined') return INITIAL_USERS;

  const stored = localStorage.getItem('yudi_users');
  
  // If browser storage is empty, use the hardcoded INITIAL_USERS
  if (!stored) {
    localStorage.setItem('yudi_users', JSON.stringify(INITIAL_USERS));
    return INITIAL_USERS;
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    return INITIAL_USERS;
  }
};

export function login(email: string, password: string): boolean {
  const users = getStoredUsers();
  const found = users.some((u: any) => u.email === email && u.password === password);

  if (found) {
    localStorage.setItem('yudi_logged_in', 'true');
  }
  return found;
}

export function register(email: string, password: string): boolean {
  const users = getStoredUsers();

  // Check if user already exists
  if (users.find((u: any) => u.email === email)) return false;

  // Add new user to the list
  const updatedUsers = [...users, { email, password }];

  // Save to LocalStorage (acts as your browser-based JSON file)
  localStorage.setItem('yudi_users', JSON.stringify(updatedUsers));
  localStorage.setItem('yudi_logged_in', 'true');

  return true;
}

export function logout() {
  localStorage.removeItem('yudi_logged_in');
}

export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('yudi_logged_in') === 'true';
}