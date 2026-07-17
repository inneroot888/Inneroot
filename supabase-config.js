// Supabase Configuration
const SUPABASE_URL = "https://yooltluwlhnekzshqvpd.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_LYM6yPH_3B4N8pK1ykbuug_6cvQRt8b";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
