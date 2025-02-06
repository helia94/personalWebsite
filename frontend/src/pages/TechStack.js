import React from 'react';

const logoImages = {
  languages: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880139/java-logo-svg-vector_rjwuu5.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880140/Kotlin_Icon_l5oyk0.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880140/6132222_hdfi25.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880140/c-sharp-c-icon-1822x2048-wuf3ijab_glkl3u.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880140/267_Python-512_hf5yyi.webp'
  ],
  practices: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880141/263275191-c8fe7127-7634-4555-b154-06524838b133_f07nmd.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880141/images_nr6gmj.jpg'
  ],
  webApis: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880141/quarkus_logo_vertical_1280px_reverse_mdjxyy.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880147/flask-icon-1594x2048-84mjydzf_przcau.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880147/springboot-inner_hkjzzq.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880147/Swagger-logo_v1iavn.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880148/NET-Framework-Logo_oevrht.jpg'
  ],
  aiMlOps: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880148/hf-logo_gjigdx.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880148/pytorch-icon-1694x2048-jgwjy3ne_ewbqhb.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880570/images_v8maz7.png'
  ],
  cloudInfra: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880151/Microsoft_Azure_Logo.svg_wezrfi.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880151/amazon-web-services_f0jfji.png'
  ],
  other: [
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880152/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail_zh0mpy.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880153/postgresql-icon-1987x2048-v2fkmdaw_pdeg2m.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880155/aws-s3-icon-423x512-k9kb24sg_c41teg.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880156/0_xhLcTOIL9R45OLXF_wwsaxl.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880157/elasticsearch_zlydtw.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880157/png-clipart-logo-kibana-elasticsearch-kiba-text-presentation_x2v5u3.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880158/sentry_cg89aj.svg'
  ]
};

// Map each logo to its corresponding technology name (in the same order)
const techNames = {
  languages: ['Java', 'Kotlin', 'C++', 'C#', 'Python'],
  practices: ['Test Driven', 'Domain Driven'],
  webApis: ['Quarkus', 'Flask', 'Spring Boot', 'Swagger', '.NET'],
  aiMlOps: ['Hugging Face', 'PyTorch', 'Azure-ML'],
  cloudInfra: ['Azure', 'AWS'],
  other: ['MongoDB', 'Postgres', 'S3', 'Grafana', 'Elastic', 'Kibana', 'Sentry']
};

const TechStack = () => {
  return (
    <>
      {/* Inline styles for a self-contained component */}
      <style>{`
        .tech-stack-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .tech-stack-container h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .tech-stack-container p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: #555;
        }
        .tech-category {
          margin-bottom: 40px;
        }
        .tech-category h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .tech-logo-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .tech-logo {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tech-logo img {
          max-width: 100%;
          max-height: 100%;
          transition: transform 0.3s ease;
        }
        .tech-logo img:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="tech-stack-container">
        <h1>My Tech Stack</h1>
        <p>
          Crafting robust, scalable solutions with a modern blend of languages, frameworks, and best practices.
        </p>

        {Object.keys(logoImages).map((category) => (
          <div key={category} className="tech-category">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="tech-logo-grid">
              {logoImages[category].map((imgSrc, index) => (
                <div key={index} className="tech-logo">
                  <img
                    src={imgSrc}
                    alt={techNames[category][index]}
                    title={techNames[category][index]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
