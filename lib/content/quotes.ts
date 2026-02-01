export interface Quote {
  text: string;
  context?: string;
  source?: string;
  date?: string;
}

export const quotes: Quote[] = [
  {
    text: "My mission is to be a voice of hope, courage, and strength. That no matter what you're going through, you can make it out, you can bounce back, and it's never too late.",
    context: "On his mission as an artist",
    source: "Voyage Austin Interview",
    date: "April 2022"
  },
  {
    text: "If I had to choose ONE word to describe my story, I would pick 'RESILIENCE.'",
    context: "Reflecting on his journey",
    source: "ShoutoutHTX Interview",
    date: "January 2024"
  },
  {
    text: "Music saved my life. Now I use it to help save others.",
    context: "On the power of his art"
  },
  {
    text: "I've been in the darkest places—jails, homelessness, addiction. If I can make it out, so can you.",
    context: "Message to those struggling"
  },
  {
    text: "Every scar tells a story. Every story can save a life.",
    context: "On vulnerability in his music"
  }
];

export const featuredQuote = quotes[0];

export const missionStatement = `To be a voice of hope, courage, and strength—proving that no matter what you're going through, you can make it out, you can bounce back, and it's never too late to turn your life around.`;
