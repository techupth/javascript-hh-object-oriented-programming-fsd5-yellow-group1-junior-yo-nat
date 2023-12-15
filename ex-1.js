// สร้าง class ที่มี Method หลักเพื่อไว้สืบทอด (ตามหลัก DRY)
class Option {
  constructor(notificationId, createdTime, content) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
  }
}

// สร้าง class ที่ชื่อว่า EmailNotification
class EmailNotification extends Option {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content);
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

// สร้าง class ที่ชื่อว่า SMSNotification
class SMSNotification extends Option {
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
  "2023-12-15 T12:00:00",
  "Hello,Stranger. This is Email notification!",
  "namuko-producer@gmail.co.jp"
);

emailNoti.send();

// สร้าง Object จาก Class ที่ชื่อว่า SMSNotification
const smsNoti = new SMSNotification(
  "765346283",
  "2023-12-15 T12:00:00",
  "Hello,Stranger. This is SMS notification!",
  "+66-97-397-5561"
);

smsNoti.send();

// ทำการตรวจสอบจาก console.log
console.log(emailNoti);
console.log(smsNoti);
