const protocols = [
  { name: 'Uniswap', abbr: 'UNI', color: '#FF007A' },
  { name: 'Arbitrum', abbr: 'ARB', color: '#28A0F0' },
  { name: 'Aave', abbr: 'AAVE', color: '#B6509E' },
  { name: 'Dune Analytics', abbr: 'D', color: '#E85425' },
  { name: 'Messari', abbr: 'M', color: '#5468FF' },
  { name: 'Nansen', abbr: 'N', color: '#00D395' },
  { name: 'Flipside', abbr: 'F', color: '#6257F8' },
];

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <p className="social-proof-label">Research tools &amp; ecosystems worked with</p>
        <div className="social-proof-logos">
          {protocols.map((p) => (
            <div key={p.name} className="proof-logo">
              <span
                className="proof-logo-icon"
                style={{ background: p.color }}
              >
                {p.abbr}
              </span>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
