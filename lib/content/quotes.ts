export interface Quote {
  text: string;
  context?: string;
  source?: string;
  date?: string;
  featured?: boolean;
}

export const quotes: Quote[] = [
  {
    text: "If I had to choose ONE word to describe my story, I would pick 'RESILIENCE.'",
    context: "When asked to sum up his journey",
    source: "ShoutoutHTX Interview",
    date: "January 2024",
    featured: true
  },
  {
    text: "My mission is to be a voice of hope, courage, and strength. That no matter what you're going through, you can make it out, you can bounce back, and it's never too late.",
    context: "On his mission as an artist and advocate",
    source: "Voyage Austin Interview", 
    date: "April 2022",
    featured: true
  },
  {
    text: "Everything that I have been through is a part of my story and testimony.",
    context: "On turning pain into purpose",
    source: "Interview",
    featured: true
  },
  {
    text: "I've been in the darkest places—jails, homelessness, addiction. If I can make it out, so can you.",
    context: "Message to those still struggling"
  },
  {
    text: "Music saved my life. Now I use it to help save others.",
    context: "On the power of his art"
  },
  {
    text: "Every scar tells a story. Every story can save a life.",
    context: "On vulnerability in his music"
  },
  {
    text: "I lost my father to addiction when I was 11. I almost lost myself to the same thing.",
    context: "On the cycle of addiction"
  },
  {
    text: "November 2022. That's when I got clean. I haven't looked back.",
    context: "On his sobriety date"
  },
  {
    text: "Hip-hop found me when I needed it most. My brother put me onto Wu-Tang, Dre, Eminem, 2pac. Those voices became my teachers.",
    context: "On his introduction to hip-hop"
  },
  {
    text: "I was 14 years old the first time I stepped in a studio. Something clicked. I knew this was what I was supposed to do.",
    context: "On his first studio session"
  }
];

export const featuredQuote = quotes.find(q => q.featured) || quotes[0];

export const featuredQuotes = quotes.filter(q => q.featured);

export const missionStatement = `To be a voice of hope, courage, and strength—proving that no matter what you're going through, you can make it out, you can bounce back, and it's never too late to turn your life around.`;

// The one word that defines J-Kline
export const oneWord = "RESILIENCE";

// For visual callouts
export const pullQuotes = [
  {
    quote: "RESILIENCE",
    subtext: "The one word that defines my story"
  },
  {
    quote: "It's never too late.",
    subtext: "No matter what you're going through"
  },
  {
    quote: "November 2022",
    subtext: "The day everything changed"
  }
];
