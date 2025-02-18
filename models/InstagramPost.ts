// src/models/InstagramPost.ts
export class InstagramPost {
    id: string;
    mediaUrl: string;
    caption: string;
    permalink: string;
  
    constructor(id: string, mediaUrl: string, caption: string, permalink: string) {
      this.id = id;
      this.mediaUrl = mediaUrl;
      this.caption = caption;
      this.permalink = permalink;
    }
  
    getLastLine(): string {
      const lines = this.caption ? this.caption.split('\n') : [];
      return lines.length > 0 ? lines[lines.length - 1] : '';
    }
  
    isSold(): boolean {
      const lastLine = this.getLastLine();
      return lastLine.split(' ').pop() === 'SOLD';
    }
  }