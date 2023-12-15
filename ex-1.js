class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }
  send() {
    console.log(`send email to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }
  send() {
    console.log(`send SMS to ${this.phoneNumber}`);
  }
}

let email1 = new EmailNotification(1, "15:12", "Hello", "hi");
let sms1 = new SMSNotification(2, "15:12", "Hello", "0811111111");
console.log(email1);
console;
