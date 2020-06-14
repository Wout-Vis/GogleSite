
const LOCAL_KEY_PROGRESS = "ls.progress";

export default class Progress {


    static getProgress() {
        const retrieve = JSON.parse( localStorage.getItem( LOCAL_KEY_PROGRESS ) );
        return retrieve;
    }

    static updateProgress( newProgress ) {
        localStorage.setItem( LOCAL_KEY_PROGRESS, JSON.stringify( newProgress ) );
    }

}