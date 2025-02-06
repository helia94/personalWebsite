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
      {/* Inline styles for sectioned panels, left-aligned category labels, and custom hover text */}
      <style>{`
        .tech-stack-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .tech-stack-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .tech-stack-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #333;
        }
        .tech-stack-header p {
          font-size: 1.2rem;
          color: #555;
        }
        .tech-category-section {
          display: flex;
          align-items: flex-start;
          margin-bottom: 40px;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }
        .tech-category-label {
          flex: 0 0 200px;
          text-align: left;
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          margin-right: 20px;
          display: flex;
          align-items: center;
        }
        .tech-logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 20px;
          flex-grow: 1;
        }
        .tech-logo {
          position: relative;
          width: 130px;
          height: 130px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .tech-logo:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 15px rgba(0,0,0,0.1);
        }
        .tech-logo img {
          max-width: 80%;
          max-height: 80%;
        }
        .hover-text {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
        }
        .tech-logo:hover .hover-text {
          opacity: 1;
        }
      `}</style>

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
