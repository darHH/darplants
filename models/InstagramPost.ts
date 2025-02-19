// src/models/InstagramPost.ts
// Plant contains name, price, description, image, waterrating, waterdescription, sunrating, sundescription, pruningdescription, availability
export class InstagramPost {
    id: string;
    mediaUrl: string;
    caption: string;
    permalink: string;
    name: string;

  
    constructor(id: string, mediaUrl: string, caption: string, permalink: string) {
      this.id = id; // Unique ID of the post
      this.mediaUrl = mediaUrl; // URL of the image
      this.caption = caption; // Whole caption of the post
      this.permalink = permalink; // URL of the post on Instagram
      this.name = this.getName(); // Name of the plant
    }
  
    getLastLine(): string {
      const lines = this.caption ? this.caption.split('\n') : [];
      return lines.length > 0 ? lines[lines.length - 1] : '';
    }

    getName(): string {
      const lastLine = this.getLastLine();
      const parts = lastLine.split(' ');
      parts.pop();
      return parts.join(' ');
    }
  
    isSold(): boolean {
      const lastLine = this.getLastLine();
      return lastLine.split(' ').pop()?.toUpperCase() === 'SOLD';
    }


  }