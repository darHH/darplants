// src/models/InstagramPost.ts
// Plant contains name, price, description, image, waterrating, waterdescription, sunrating, sundescription, pruningdescription, availability
export class InstagramPost {
    id: string;
    mediaUrl: string;
    caption: string;
    permalink: string;
    fullName: string;
    plantName: string;
    price: number | null;
    igDescription: string;

    constructor(id: string, mediaUrl: string, caption: string, permalink: string) {
      this.id = id; // Unique ID of the post
      this.mediaUrl = mediaUrl; // URL of the image
      this.caption = caption; // Whole caption of the post
      this.permalink = permalink; // URL of the post on Instagram

      this.fullName = this.getFullName(); // Name of the plant and planter
      this.plantName = this.fullName.split('in')[0]; // Name of the plant
      this.price = this.getPrice(); // Price of the plant in SGD
      this.igDescription = this.getIgDescription(); // IG's description of the plant
    }
  
    getLastLine(): string {
      const lines = this.caption ? this.caption.split('\n') : [];
      return lines.length > 0 ? lines[lines.length - 1] : '';
    }

    getFullName(): string {
      const lastLine = this.getLastLine();
      const parts = lastLine.split(' ');
      parts.pop();
      return parts.join(' ');
    }

    getPrice(): number | null {
      const lastLine = this.getLastLine();
      const isDigit = lastLine.match(/\d+/);
      if (isDigit) {
        return parseInt(isDigit[0], 10);
      }
      return null
    }

    getIgDescription(): string {
      const paragraphs = this.caption ? this.caption.split('\n\n') : [];
      return paragraphs.length > 0 ? paragraphs[0] : '';
    }

    isSold(): boolean {
      const lastLine = this.getLastLine();
      return lastLine.split(' ').pop()?.toUpperCase() === 'SOLD';
    }


  }