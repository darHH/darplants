import plant_data from "./plant_data.json"

// src/models/InstagramPost.ts
export class InstagramPost {
    id: string;
    mediaUrl: string;
    caption: string;
    permalink: string;
    fullName: string;
    plantName: string;
    price: number | null;
    igDescription: string;
    waterFrequency: number = 0;
    waterGuide: string = '';
    sunRating: number = 0;
    sunGuide: string = '';

    constructor(id: string, mediaUrl: string, caption: string, permalink: string) {
      this.id = id; // Unique ID of the post
      this.mediaUrl = mediaUrl; // URL of the image
      this.caption = caption; // Whole caption of the post
      this.permalink = permalink; // URL of the post on Instagram

      this.fullName = this.getFullName(); // Name of the plant and planter
      this.plantName = this.fullName.split(' in ')[0]; // Name of the plant
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

    async getPlantData(): Promise<void> {
      try {
        const plantData = plant_data
    
        // Find the plant
        const plant = plantData.find((p: any) => p.name.toLowerCase() === this.plantName.toLowerCase().trimEnd());
    
        if (!plant) {
          console.error(`Error: Plant "${this.plantName}" not found.`);
          return;
        }
    
        // Assign values to the instance
        this.waterFrequency = plant.water_frequency;
        this.waterGuide = plant.water_requirement_description;
        this.sunRating = plant.sunlight_requirement_rating;
        this.sunGuide = plant.sunlight_requirement_description;
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    }

  }