class AuthenticationService{
    registerLogIn(user){
        sessionStorage.setItem('LoggedInUser',user);
    }
    isUserLoggedIn(){
        let user=sessionStorage.getItem('LoggedInUser')
        if(user===null){
            return false
        }
        return true
    }
    logout(){
        sessionStorage.removeItem('LoggedInUser')
    }
}
export default new AuthenticationService();