import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If the keys aren't set yet, export null so the app runs in
// "local-only" mode instead of crashing. Once you add the two
// VITE_SUPABASE_* env vars in Vercel, cloud sync turns on automatically.
export const supabase = url && key ? createClient(url, key) : null;
