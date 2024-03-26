export default abstract class LoginPage {
    abstract inputUserName(username: string) : void;
    abstract inputPassword(password: string) : void;
    abstract clickLoginBtn() : void;

    
}