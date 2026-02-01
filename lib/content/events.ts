export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue: string;
  city: string;
  address?: string;
  ticketUrl?: string;
  type: 'performance' | 'speaking' | 'community';
  description?: string;
}

export const upcomingEvents: Event[] = [];

export const pastEvents: Event[] = [];

export const bookingTypes = [
  {
    type: "Live Performances",
    description: "High-energy hip-hop performances with message-driven music",
    icon: "mic"
  },
  {
    type: "Motivational Speaking",
    description: "Inspiring talks on resilience, recovery, and second chances",
    icon: "podium"
  },
  {
    type: "Recovery Events & Panels",
    description: "Speaking at treatment centers, recovery houses, and awareness events",
    icon: "heart"
  },
  {
    type: "Community Outreach",
    description: "Working with at-risk youth and community organizations",
    icon: "users"
  }
];

export const bookingInfo = {
  email: 'jklinemusicent@gmail.com',
  responseTime: '24-48 hours',
  availableFor: [
    'Concerts & Festivals',
    'Corporate Events',
    'School Assemblies',
    'Recovery Centers',
    'Churches & Faith-Based Events',
    'Private Events',
    'Podcast Appearances',
    'Media Interviews'
  ]
};
