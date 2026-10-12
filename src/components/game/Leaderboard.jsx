import React from 'react';

export default function Leaderboard({ players, prices, startingCash }) {
  const sorted = [...players].sort((a, b) => calcValue(b, prices) - calcValue(a, prices));

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, var(--navy-dark) 0%, var(--navy) 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: 24,
    }}>
      <div style={{ width: '100%', maxWidth: 600 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32, color: 'white' }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>🏆</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '2.2rem',
            color: 'white', marginBottom: 8,
          }}>
            Final Results
          </h1>
          <p style={{ opacity: 0.7 }}>The trading session has ended</p>
        </div>

        {/* Podium: top 3 — display order is 2nd | 1st | 3rd */}
        {sorted.length >= 3 && (() => {
          // Each entry: which rank (0-based index into sorted), display config
          const podium = [
            { rank: 1, medal: '🥈', color: '#C0C0C0', height: 110, label: '2' },
            { rank: 0, medal: '🥇', color: '#FFD700', height: 140, label: '1' },
            { rank: 2, medal: '🥉', color: '#CD7F32', height:  90, label: '3' },
          ];
          return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 12, marginBottom: 28 }}>
              {podium.map(({ rank, medal, color, height, label }) => {
                const p = sorted[rank];
                if (!p) return null;
                const val = calcValue(p, prices);
                return (
                  <div key={p.id ?? rank} style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 6 }}>{medal}</div>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>{p.nickname}</div>
                    <div style={{ color: 'white', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                      £{val.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                    </div>
                    <div style={{
                      height, background: color, borderRadius: '8px 8px 0 0', marginTop: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#333', fontWeight: 700, fontSize: '1.2rem',
                    }}>
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Full table */}
        <div className="card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Trader</th>
                  <th>Portfolio Value</th>
                  <th>Profit / Loss</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((p, i) => {
                  const val = calcValue(p, prices);
                  const pnl = val - startingCash;
                  return (
                    <tr key={p.id} style={{ background: i === 0 ? '#fffbeb' : undefined }}>
                      <td style={{ fontWeight: 700 }}>
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                      </td>
                      <td style={{ fontWeight: i < 3 ? 700 : 400 }}>{p.nickname}</td>
                      <td style={{
                        fontFamily: 'var(--font-display)', fontWeight: 600,
                        fontSize: '1rem',
                      }}>
                        £{val.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                      </td>
                      <td className={pnl >= 0 ? 'price-up' : 'price-down'} style={{ fontWeight: 600 }}>
                        {pnl >= 0 ? '+' : ''}£{pnl.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                        <span style={{ fontSize: '0.78rem', marginLeft: 6, opacity: 0.7 }}>
                          ({pnl >= 0 ? '+' : ''}{((pnl / startingCash) * 100).toFixed(1)}%)
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function calcValue(player, prices) {
  let val = player.cash ?? 0;
  for (const [assetId, qty] of Object.entries(player.holdings ?? {})) {
    val += (prices[assetId] ?? 0) * qty;
  }
  return Math.round(val);
}
