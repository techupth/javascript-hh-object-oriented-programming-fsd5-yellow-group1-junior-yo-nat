// สร้าง class ที่มี Method หลักเพื่อไว้สืบทอด (ตามหลัก DRY)
class Option {
  constructor(notificationId, createdTime, content) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
  }
}

// สร้าง Class ที่ชื่อว่า Notification
class Notification extends Option {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

// สร้าง class ที่ชื่อว่า EmailNotification
class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

// สร้าง class ที่ชื่อว่า SMSNotification
class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    super(notificationId, createdTime, content);
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

// กำหนดรายละเอียด

//สร้าง Object จาก Class ที่ชื่อว่า EmailNotification
const emailNoti = new EmailNotification(
  "765346283",
  "2023-12-15 T13:30:50",
  "Hello, Nice to see you and This is Email notification!",
  "kotoha-tanaka@namcopro.co.jp"
);

emailNoti.send();

// สร้าง Object จาก Class ที่ชื่อว่า SMSNotification
const smsNoti = new SMSNotification(
  "765346283",
  "2023-12-15 T13:30:50",
  "Hello, Good to see you and This is SMS notification!",
  "+66-9876-5332"
);

smsNoti.send();

// Execute ตัว Method send จาก Object EmailNotification และ Object SMSNotification ที่เราสร้าง
// ทำการตรวจสอบจาก console.log
console.log(emailNoti);
console.log(smsNoti);
