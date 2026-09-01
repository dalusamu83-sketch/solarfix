// ============================================================
// SolarFix — Supabase connection
// ============================================================
// 1. Go to your Supabase project → Project Settings → API
// 2. Copy the "Project URL" and the "anon public" key
// 3. Paste them below. These are safe to expose in frontend code —
//    Row Level Security (see sql/schema.sql) is what actually protects
//    your data, not secrecy of this key.
// ============================================================

const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";
const SUPABASE_ANON_KEY = "PASTE_YOUR_SUPABASE_ANON_KEY_HERE";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
