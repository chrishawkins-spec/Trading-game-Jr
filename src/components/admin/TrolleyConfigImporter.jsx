import React, { useState } from 'react';
import { parseTrolleyPricingWorkbook } from '../../utils/trolleyPricingParser.js';
import { saveTrolleyConfig } from '../../utils/firestore.js';
import { useAuth } from '../../hooks/useAuth.jsx';

/**
 * Browser-based replacement for the Shopping Trolley repo's command-line
 * import script — same parsing logic (trolleyPricingParser.js), but as an
 * upload-and-preview form here instead of a terminal command + service
 * account key. The CLI script still exists for anyone who prefers it, but
 * this is the quick path for day-to-day use.
 */
export default function TrolleyConfigImporter({ onClose, onImported }) {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [parsed, setParsed] = useState(null); // { config, warnings, counts }
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files?.[0] ?? null);
    setParsed(null);
    setError('');
    setSaved(null);
  };

  const handlePreview = async () => {
    if (!file) { setError('Choose a spreadsheet file first.'); return; }
    if (!name.trim()) { setError('Give this config a name.'); return; }
    setError(''); setParsed(null);
    try {
      const buf = await file.arrayBuffer();
      const result = parseTrolleyPricingWorkbook(buf, name.trim());
      setParsed(result);
    } catch (e) {
      setError('Could not parse that spreadsheet: ' + e.message);
    }
  };

  const handleSave = async () => {
    if (!parsed) return;
    setSaving(true); setError('');
    try {
      const id = await saveTrolleyConfig(parsed.config, user.uid);
      setSaved(id);
      onImported?.();
    } catch (e) {
      setError('Failed to save: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="card" style={{ marginBottom: 24, borderColor: 'var(--orange)', borderWidth: 2 }}>
      <div className="card-header">
        <h3 style={{ fontSize: '1rem' }}>Import Pricing Spreadsheet</h3>
        <button className="btn btn-ghost btn-sm" onClick={onClose}>Close</button>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Config Name *</label>
          <input className="form-input" value={name} onChange={e => setName(e.target.value)}
            placeholder="Spaghetti Bolognese v1" />
          <span className="form-hint">Shown in the Game Configuration dropdown when creating a Shopping Challenge code</span>
        </div>

        <div className="form-group">
          <label className="form-label">Spreadsheet (.xlsx) *</label>
          <input className="form-input" type="file" accept=".xlsx" onChange={handleFile} />
        </div>

        {error && <div className="alert alert-error" style={{ marginBottom: 16 }}>{error}</div>}

        {!parsed && (
          <button className="btn btn-primary" onClick={handlePreview} disabled={!file || !name.trim()}>
            Preview
          </button>
        )}

        {parsed && !saved && (
          <>
            <div style={{ background: 'var(--surface)', borderRadius: 8, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>
                Parsed: {parsed.counts.outlets} outlets, {parsed.counts.items} items, {parsed.counts.options} priced options
              </div>
              {parsed.warnings.length > 0 ? (
                <div>
                  <div style={{ fontWeight: 600, color: '#92400e', marginBottom: 4 }}>
                    {parsed.warnings.length} warning{parsed.warnings.length !== 1 ? 's' : ''}:
                  </div>
                  <ul style={{ paddingLeft: 20, margin: 0, fontSize: '0.85rem', color: '#92400e' }}>
                    {parsed.warnings.map((w, i) => <li key={i}>{w}</li>)}
                  </ul>
                </div>
              ) : (
                <div style={{ color: 'var(--green)', fontSize: '0.85rem' }}>No warnings.</div>
              )}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving…' : 'Save to Firestore'}
              </button>
              <button className="btn btn-outline" onClick={() => setParsed(null)}>Re-check</button>
            </div>
          </>
        )}

        {saved && (
          <div className="alert alert-success">
            ✓ Saved as <code>trolleyConfigs/{saved}</code>. Close this and it'll appear in the list below.
          </div>
        )}
      </div>
    </div>
  );
}
