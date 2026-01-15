
export const CONFIG = {
  // قراءة مفتاح Gemini من البيئة
  GEMINI_API_KEY: process.env.APi_key || '',
  // بيانات Supabase للتزامن
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  IS_PROD: true
};
