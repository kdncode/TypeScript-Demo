// To use abstract -> must create a subclass to use superclass

abstract class OS {
    name: string;

    public sendMessage() {
        console.log('Send message');
    }

    public call() {
        console.log('Call');
    }
}

class Android extends OS {

}

let iOS = new Android();
iOS.sendMessage();
iOS.call();
