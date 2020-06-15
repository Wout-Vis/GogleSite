
const LOCAL_KEY_PROGRESS = "ls.progress";
const LOCAL_KEY_CAPTCHA = "ls.captcha";

export default class Progress {


    static getProgress() {
        const retrieve = JSON.parse( localStorage.getItem( LOCAL_KEY_PROGRESS ) );
        return retrieve;
    }

    static updateProgress( newProgress ) {
        localStorage.setItem( LOCAL_KEY_PROGRESS, JSON.stringify( newProgress ) );
    }

    static getCaptchaState() {
        const retrieve = JSON.parse( localStorage.getItem( LOCAL_KEY_CAPTCHA ) );
        return retrieve;
    }

    static solveCaptcha() {
        localStorage.setItem( LOCAL_KEY_CAPTCHA, JSON.stringify( '1' ) );
    }

    static resetCaptcha() {
        localStorage.setItem( LOCAL_KEY_CAPTCHA, JSON.stringify( '0' ) );
    }

}