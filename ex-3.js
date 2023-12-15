//  Start coding here

// 1) สร้าง Class User
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// 2) สร้าง Class PostList
class PostList {
  constructor(posts) {
    this.posts = posts;
  }

  addPost(newPost) {
    this.posts = newPost;
  }

  sharePost(postTitle) {
    console.log(`You've shared post "${postTitle}" to your friend.`);
  }
}

// 3) สร้าง Class Post
class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}

// 4) สร้าง Class Comment
class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like = this.like + 1;
  }
}

// 5) สร้าง Class Facebook
class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

// 6) สร้าง Class FacebookPage
class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

// 7) สร้าง Class FacebookGroup
class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

// 8) สร้าง Class Notification
class Notification {
  constructor(id) {
    this.id = id;
  }

  send() {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}”`
    );
  }
}
