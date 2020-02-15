export class auth {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
