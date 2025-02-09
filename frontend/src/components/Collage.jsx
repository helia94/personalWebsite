// Collage.jsx
import React from 'react';
import './Collage.css';

const emotions = [
  {
    title: "Sehnsucht (German)",
    description:
      "A deep longing for something unattainable or unknown. It's a bittersweet feeling of yearning for a place, person, or experience that may not exist or be out of reach."
  },
  {
    title: "Kaamos (Finnish)",
    description:
      "The feeling of despair and melancholy associated with the long, dark winters in Finland, with little sunlight."
  },
  {
    title: "Wabi-Sabi (Japanese)",
    description:
      "Finding beauty in imperfection and impermanence. It appreciates the natural aging and weathered look of things."
  },
  {
    title: "Goya (Urdu)",
    description:
      "Goya refers to the suspension of disbelief that happens when fantasy is so realistic that it temporarily becomes reality. It captures the experience of being so engrossed in a story that you forget it isn't real."
  },
  {
    title: "Iktsuarpok (Inuit)",
    description:
      "Describes the feeling of anticipation that leads you to repeatedly check if someone is coming. It's the restless, excited expectation when waiting for an expected visitor."
  },
  {
    title: "Spleen (French)",
    description:
      "A state of deep melancholy or existential ennui, often associated with a sense of purposelessness and the futility of life. It conveys a profound, poetic sadness."
  },
  {
    title: "Afsondering (Dutch)",
    description:
      "Means seclusion or isolation, often self-imposed. It reflects being alone—either peaceful and contemplative or lonely and desolate."
  },
  {
    title: "Ennui (French)",
    description:
      "A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement. It's a profound, existential boredom leading to aimlessness."
  },
  {
    title: "Blase (French)",
    description:
      "Describes a feeling of indifference or boredom due to an excess of worldly pleasures, leading to a jaded attitude toward life."
  },
  {
    title: "Waldeinsamkeit (German)",
    description:
      "The feeling of solitude and connectedness to nature when being alone in the woods. It embodies a peaceful, reflective, and almost mystical experience."
  },
  {
    title: "Komorebi (Japanese)",
    description:
      "Refers to the sunlight filtering through the leaves of trees, capturing the interplay between light and foliage."
  },
  {
    title: "Topophilia (English)",
    description:
      "The love of place—a strong affection and attachment to a specific environment, emphasizing the bond people feel with their cherished spaces."
  },
  {
    title: "Nakama (Japanese)",
    description:
      "Means comrades or close friends treated like family, signifying deep bonds and mutual loyalty."
  },
  {
    title: "Kalyan Mitra (Sanskrit)",
    description:
      "Refers to a spiritual friend or mentor who guides one toward enlightenment and moral betterment through trust and wisdom."
  },
  {
    title: "Guanxi (Chinese)",
    description:
      "Describes the system of social networks and influential relationships built on mutual trust, reciprocity, and long-term cooperation."
  },
  {
    title: "Tsundoku (Japanese)",
    description:
      "The act of acquiring books and letting them pile up unread, reflecting a love for books even if they remain unconsumed."
  },
  {
    title: "Anomie (English)",
    description:
      "Describes a state of social instability caused by the breakdown of standards and values, leading to alienation and purposelessness."
  },
  {
    title: "Mono no aware (Japanese)",
    description:
      "A deep, bittersweet appreciation of life's transient beauty, acknowledging impermanence and the gentle sadness it brings."
  },
  {
    title: "Absurdisme (French)",
    description:
      "The philosophy that life is inherently meaningless, but we can create our own meaning through our actions and choices."
  },
  {
    title: "L'appel du vide (French)",
    description:
      "Known as 'the call of the void,' it's the sudden, inexplicable urge to jump from high places—a fleeting, irrational impulse."
  },
  {
    title: "Gombrowiczowska (Polish)",
    description:
      "Inspired by Witold Gombrowicz, it describes awkwardness, self-consciousness, and the struggle for authenticity in a world of social masks."
  },
  {
    title: "Poshlost (Russian)",
    description:
      "Refers to a kind of vulgarity or banality linked to moral and spiritual shallowness—a sentimental kitsch or hypocrisy in art and social interactions."
  },
  {
    title: "Litost (Czech)",
    description:
      "A state of torment created by the sudden sight of one’s own misery—a mix of grief, longing, and remorse triggered by personal inadequacy."
  },
  {
    title: "Han (Korean)",
    description:
      "A deep, complex emotional state combining sorrow, regret, and grief, tied to historical and cultural experiences and unresolved collective pain."
  },
  {
    title: "Dolce Far Niente (Italian)",
    description:
      "Translates to 'the sweetness of doing nothing.'"
  }
];

const Card = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Collage = () => {
  return (
    <div className="collage-container">
        <h2>Emotions from around the globe</h2>
      {emotions.map((emotion, index) => (
        <Card key={index} title={emotion.title} description={emotion.description} />
      ))}
    </div>
  );
};

export default Collage;
