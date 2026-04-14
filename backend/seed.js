const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

async function seed() {
  const products = [
    { name: 'Protein Powder', price: 180, description: '250gm - Health protein mix', image: 'protein-powder.jpeg' },
    { name: 'Pirandai Thuvaiyal', price: 180, description: '250gm - Strengthens bones', image: 'pirandai-thuvaiyal.jpeg' },
    { name: 'Sugar Control Health Mix', price: 180, description: '250gm - Controls sugar levels', image: 'sugar-mix.jpeg' },
    { name: 'Women Health Mix', price: 180, description: '250gm - Nutrition for women', image: 'women-mix.jpeg' },
    { name: 'Men Health Mix', price: 180, description: '250gm - Nutrition for men', image: 'men-mix.jpeg' },
    { name: 'Karuppu Ulunthu Kanji', price: 180, description: '250gm - Traditional healthy mix', image: 'kanji.jpeg' },
    { name: 'Mudakathan Satham Podi', price: 230, description: '250gm - Herbal rice powder', image: 'mudakathan.jpeg' },
    { name: 'Pirandai Satham Podi', price: 245, description: '250gm - Bone strengthening mix', image: 'pirandai-podi.jpeg' }
  ];

  for (const p of products) {
    try {
      const form = new FormData();

      form.append('name', p.name);
      form.append('price', p.price.toString());
      form.append('description', p.description);

      const filePath = path.join(__dirname, "uploads", p.image);
      form.append("image", fs.createReadStream(filePath));

      await axios.post("http://localhost:5000/api/products", form, {
        headers: form.getHeaders(),
      });

      console.log(`✅ Seeded: ${p.name}`);

    } catch (err) {
      console.error(`❌ Error seeding ${p.name}:`, err.message);
    }
  }
}

seed();