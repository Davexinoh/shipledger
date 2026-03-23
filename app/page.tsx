export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      {/* HEADER */}
      <div className="mb-16 pt-8">
        <div className="text-2xl font-bold mb-2">
          <span style={{ color: '#ededed' }}>Ship</span>
          <span style={{ color: '#00ff88' }}>Ledger</span>
        </div>
        <p style={{ color: '#666' }} className="text-sm">
          // onchain proof that founders actually ship
        </p>
      </div>

      {/* HERO */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Your GitHub activity.<br />
          <span style={{ color: '#00ff88' }}>Attested onchain.</span><br />
          Every week.
        </h1>
        <p style={{ color: '#999' }} className="text-base mb-8 max-w-lg">
          Connect GitHub and your commits, PRs, and deploys get 
          attested weekly on Base via EAS — building a tamper-proof 
          builder profile that compounds every week you ship.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            style={{
              border: '1px solid #00ff88',
              color: '#00ff88',
              padding: '10px 24px',
              fontSize: '14px',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            [ Connect GitHub ]
          </button>
          <button
            style={{
              border: '1px solid #333',
              color: '#999',
              padding: '10px 24px',
              fontSize: '14px',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            [ View Example Profile ]
          </button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mb-16">
        <p style={{ color: '#00ff88' }} className="text-xs mb-6">
          // HOW_IT_WORKS
        </p>
        <div className="grid gap-6">
          {[
            { step: '01', title: 'Connect GitHub', desc: 'OAuth into GitHub. ShipLedger reads your commits, PRs, and deploys.' },
            { step: '02', title: 'Weekly Attestation', desc: 'Every 7 days your activity is bundled and attested onchain via EAS on Base.' },
            { step: '03', title: 'Public Profile', desc: 'shipledger.xyz/@you — your shipping streak, velocity, and reputation score. All verifiable.' },
          ].map((item) => (
            <div
              key={item.step}
              style={{ borderLeft: '2px solid #00ff88', paddingLeft: '16px' }}
            >
              <div style={{ color: '#00ff88' }} className="text-xs mb-1">
                {item.step}
              </div>
              <div className="text-sm font-bold mb-1">{item.title}</div>
              <div style={{ color: '#666' }} className="text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{ borderTop: '1px solid #1a1a1a', color: '#444' }}
        className="pt-8 text-xs"
      >
        <span>ShipLedger — built on Base</span>
        <span className="mx-4">|</span>
        <span>$SHIP</span>
        <span className="mx-4">|</span>
        <a
          href="https://github.com/Davexinoh"
          style={{ color: '#00ff88' }}
          target="_blank"
          rel="noreferrer"
        >
          github.com/Davexinoh
        </a>
      </div>
    </main>
  );
}