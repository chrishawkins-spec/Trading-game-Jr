import React from 'react';

export default function NewsOverlay({ story, onDismiss, onReady, alreadyReady }) {
  if (!story?.headline) return null;

  return (
    <div className="news-overlay">
      <div className="news-card" style={{ maxWidth: 640 }}>
        {/* Breaking news label */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--orange)', color: 'white',
          borderRadius: 6, padding: '4px 12px',
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em',
          marginBottom: 16,
        }}>
          📰 BREAKING NEWS
        </div>

        <h2>{story.headline}</h2>

        {story.body && (
          <p className="news-body" style={{ marginTop: 12 }}>{story.body}</p>
        )}

        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          {/* Ready button — tells teacher you've read the news */}
          {onReady && (
            <button
              className="btn btn-primary btn-lg"
              onClick={onReady}
              disabled={alreadyReady}
              style={alreadyReady ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              {alreadyReady ? '✅ Ready!' : '✅ Mark as ready'}
            </button>
          )}
          {/* Dismiss — closes the overlay so you can review your portfolio */}
          <button className="btn btn-outline btn-lg" onClick={onDismiss}>
            View portfolio →
          </button>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            {alreadyReady ? 'Waiting for teacher to open pre-market…' : 'Read the news, then mark ready'}
          </span>
        </div>
      </div>
    </div>
  );
}
