export interface TimelineEvent {
  year: number;
  month?: string;
  title: string;
  description: string;
  type: 'origin' | 'dark' | 'turning-point' | 'victory' | 'milestone';
  icon?: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: 1991,
    month: "February",
    title: "Born in Battle Creek, Michigan",
    description: "Raised by a single mother who worked factory nights and nursing school days. Learned early what sacrifice and resilience look like.",
    type: 'origin',
    icon: "🏠"
  },
  {
    year: 1997,
    title: "The Dream Begins",
    description: "First grade: told his teacher he wanted to be an actor. The seed of performance was planted early.",
    type: 'origin',
    icon: "⭐"
  },
  {
    year: 2002,
    title: "Lost His Father",
    description: "At age 11, J-Kline lost his father to addiction. The loss carved deep and would shape everything that followed.",
    type: 'dark',
    icon: "💔"
  },
  {
    year: 2003,
    title: "Found Hip-Hop",
    description: "His brother, 13 years older, introduced him to Wu-Tang, Dr. Dre, Eminem, and 2pac. By sixth grade, he was writing his own rhymes—finding words for feelings he couldn't speak.",
    type: 'turning-point',
    icon: "🎤"
  },
  {
    year: 2005,
    title: "First Studio Session",
    description: "At 14 years old, stepped into a recording studio for the first time. Something clicked. He knew this was his calling.",
    type: 'milestone',
    icon: "🎧"
  },
  {
    year: 2009,
    title: "The Fall Begins",
    description: "Senior year. Anxiety and depression take hold. Started using to cope—the beginning of a nine-year battle with addiction.",
    type: 'dark',
    icon: "📉"
  },
  {
    year: 2013,
    title: "Moved to Austin",
    description: "Seeking a fresh start in Texas. The change of scenery wasn't enough—the struggle continued.",
    type: 'milestone',
    icon: "🚗"
  },
  {
    year: 2018,
    month: "April",
    title: "Got Clean",
    description: "After nine years of jails, rehabs, and homelessness, J-Kline got clean. Returned to music after a five-year absence.",
    type: 'turning-point',
    icon: "🌅"
  },
  {
    year: 2020,
    month: "March",
    title: "Pandemic Hits",
    description: "COVID-19 shut everything down. Lost his job. But he kept pushing forward with his music.",
    type: 'dark',
    icon: "😷"
  },
  {
    year: 2020,
    month: "June",
    title: "Lost His Best Friend",
    description: "A tragic lake accident took his best friend. The grief was unbearable. He relapsed.",
    type: 'dark',
    icon: "💔"
  },
  {
    year: 2021,
    month: "October",
    title: "Got Clean Again",
    description: "This time, for good. Hasn't looked back since. The pain became purpose.",
    type: 'victory',
    icon: "🔥"
  },
  {
    year: 2022,
    title: "Released 'Lost In Austin'",
    description: "Debut album dropped through College of Hip-Hop Knowledge Records / Sony-Orchard. Every track carries the weight of his journey.",
    type: 'victory',
    icon: "💿"
  },
  {
    year: 2024,
    title: "The Redemption Tape",
    description: "Working on his second album—his most personal and powerful work yet. The story continues.",
    type: 'milestone',
    icon: "🎬"
  },
  {
    year: 2025,
    title: "Recovery Advocate & Life Coach",
    description: "Certified life coach, motivational speaker, and recovery advocate. Using his platform to be a voice of hope for those still struggling.",
    type: 'victory',
    icon: "🙌"
  }
];

// Grouped by era for visual treatment
export const timelineEras = {
  origins: {
    title: "Origins",
    subtitle: "Battle Creek, Michigan",
    years: "1991-2005",
    events: timeline.filter(e => e.year >= 1991 && e.year <= 2005)
  },
  darkness: {
    title: "The Darkness",
    subtitle: "Nine Years of Struggle", 
    years: "2009-2020",
    events: timeline.filter(e => e.year >= 2009 && e.year <= 2020)
  },
  redemption: {
    title: "Redemption",
    subtitle: "The Comeback",
    years: "2021-Present",
    events: timeline.filter(e => e.year >= 2021)
  }
};

// Key dates for visual callouts
export const keyDates = {
  birthdate: "February 21, 1991",
  fatherLost: "2002",
  firstStudio: "2005",
  firstClean: "April 2018",
  friendLost: "June 2020", 
  sobrietyDate: "October 2021",
  debutAlbum: "2022"
};

// For animated number displays
export const stats = {
  yearsInRecovery: new Date().getFullYear() - 2021,
  yearsWritingMusic: new Date().getFullYear() - 2003,
  firstStudioAge: 14,
  yearsInAddiction: 9,
  yearsClean: `${new Date().getFullYear() - 2021}+`
};
