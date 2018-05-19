// To use abstract -> must create a subclass to use superclass

// abstract class OS {
//     name: string;

//     public sendMessage() {
//         console.log('Send message');
//     }

//     public call() {
//         console.log('Call');
//     }
// }

// class Android extends OS {

// }

// let iOS = new Android();
// iOS.sendMessage();
// iOS.call();

// Use abstract for function
abstract class OS {
    name: string;

    abstract sendMessage() : void;

    abstract call() : string;
}

class Android extends OS {
    sendMessage() {
        console.log('Send messages from Android OS');
    }

    call() : string {
        return 'Call from Android';
    }
}

let iOS = new Android();
iOS.sendMessage();
console.log(iOS.call());
