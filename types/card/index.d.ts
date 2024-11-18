export interface PriceCard {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}


export interface CommunityCard {
  quote: string;
  author: string;
}


export interface FeatureCard {
  icon: string;
  color: string;
  title: string;
  description: string;
}



export interface ChallengeCard {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  img: string;
}