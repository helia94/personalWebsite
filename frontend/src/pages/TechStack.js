import React from 'react';
import "./TechStack.css"

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
    'https://res.cloudinary.com/dl9xg597r/image/upload/v1738882638/mongo_ljrzin.webp',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880153/postgresql-icon-1987x2048-v2fkmdaw_pdeg2m.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880155/aws-s3-icon-423x512-k9kb24sg_c41teg.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880156/0_xhLcTOIL9R45OLXF_wwsaxl.png',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880157/elasticsearch_zlydtw.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/v1738882638/elastic-kibana_dbxwqe.svg',
    'https://res.cloudinary.com/dl9xg597r/image/upload/f_webp/q_auto:low/v1738880158/sentry_cg89aj.svg'
  ]
};

const techNames = {
  languages: ['Java', 'Kotlin', 'C++', 'C#', 'Python'],
  practices: ['Test Driven Development', 'Domain Driven Development'],
  webApis: ['Quarkus', 'Flask', 'Spring Boot', 'Swagger', '.NET'],
  aiMlOps: ['Hugging Face', 'PyTorch', 'Azure-ML'],
  cloudInfra: ['Azure', 'AWS'],
  other: ['MongoDB', 'Postgres', 'S3', 'Grafana', 'Elastic', 'Kibana', 'Sentry']
};

const categoryDisplayNames = {
  languages: 'Programming Languages',
  practices: 'Development Practices',
  webApis: 'Web APIs',
  aiMlOps: 'AI & MLOps',
  cloudInfra: 'Cloud Infrastructure',
  other: 'Other Tools'
};

const TechStackSections = () => {
  return (
    <>
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2>My Tech Stack</h2>
          <p>A snapshot of the technologies I use to build modern solutions.</p>
        </div>

        {Object.keys(logoImages).map((category) => (
          <div key={category} className="tech-category-section">
            <div className="tech-category-label">
              {categoryDisplayNames[category]}
            </div>
            <div className="tech-logo-grid">
              {logoImages[category].map((src, index) => (
                <div key={index} className="tech-logo">
                  <img src={src} alt={techNames[category][index]} />
                  <div className="hover-text">{techNames[category][index]}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStackSections;
