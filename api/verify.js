module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const password = (req.body && req.body.password) || '';
  const expected = process.env.ADMIN_PASSWORD || 'admin123';

  if (password === expected) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ ok: false, error: 'Wrong password' });
};
