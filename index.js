const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runTemperature() {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
        prompt: 'List the highest Temperature of Delhi,India in year 2000',
      temperature: 0.6,
    });
    console.log(completion.data.choices[0].text);
  } catch (e) {
    console.log(e.message);
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.
  
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
}
async function runComletion() {
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt('wolf'),
      //   prompt: 'what is current Time',
      temperature: 0.6,
    });
    console.log(completion.data.choices[0].text);
  } catch (e) {
    console.log(e.message);
  }
}

runComletion();
runTemperature();
