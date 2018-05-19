class OS {
    name: string;

    public sendMessage() {
        console.log('Send message');
    }

    public call() {
        console.log('Call');
    }
}

let iOS = new OS();
iOS.sendMessage();
