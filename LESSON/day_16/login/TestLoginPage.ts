import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginTestFlow from "./LoginFlow";

const internalLoginPage = new InternalLoginPage();
const externalLoginPage = new ExternalLoginPage();

const loginTestFlow = new LoginTestFlow('username','password');
loginTestFlow.login(internalLoginPage);
loginTestFlow.login(externalLoginPage)
