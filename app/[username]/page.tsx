type Props = {
  params: Promise<{ username: string }>;
};

export default async function ProfilePage({ params }: Props) {
  const { username } = await params;

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      {/* HEADER */}
      <div className="mb-12 pt-8 flex items-center justify-between">
        <a href="/" style={{ color: '#ededed' }} className="text-lg font-bold">
          <span style={{ color: '#ededed' }}>Ship</span>
          <span style={{ color: '#00ff88' }}>Ledger</span>
        </a>
        <span style={{ color: '#444' }} className="text-xs">
          // BUILDER_PROFILE
        </span>
      </div>

      {/* PROFILE HEADER */}
      <div
        style={{ borderLeft: '3px solid #00ff88', paddingLeft: '16px' }}
        className="mb-12"
      >
        <div className="text-2xl font-bold mb-1">@{username}</div>
        <div style={{ color: '#666' }} className="text-sm mb-4">
          // verified builder on Base
        </div>
        <div className="flex gap-6 flex-wrap">
          <div>
            <div style={{ color: '#00ff88' }} className="text-2xl font-bold">
              --
            </div>
            <div style={{ color: '#666' }} className="text-xs">
              week streak
            </div>
          </div>
          <div>
            <div style={{ color: '#00ff88' }} className="text-2xl font-bold">
              --
            </div>
            <div style={{ color: '#666' }} className="text-xs">
              attestations
            </div>
          </div>
          <div>
            <div style={{ color: '#00ff88' }} className="text-2xl font-bold">
              --
            </div>
            <div style={{ color: '#666' }} className="text-xs">
              reputation score
            </div>
          </div>
        </div>
      </div>

      {/* ATTESTATION FEED */}
      <div className="mb-12">
        <p style={{ color: '#00ff88' }} className="text-xs mb-6">
          // ATTESTATION_FEED
        </p>
        <div
          style={{
            border: '1px solid #1a1a1a',
            padding: '24px',
            color: '#444',
            textAlign: 'center',
          }}
          className="text-sm"
        >
          // no attestations yet — connect GitHub to start shipping
        </div>
      </div>

      {/* ONCHAIN LINK */}
      <div className="mb-12">
        <p style={{ color: '#00ff88' }} className="text-xs mb-4">
          // ONCHAIN_RECORD
        </p>
        <div style={{ color: '#666' }} className="text-xs">
          All attestations are publicly verifiable on Base via EAS.
          <br />
          <a
            href="https://base.easscan.org"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00ff88' }}
          >
            base.easscan.org →
          </a>
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