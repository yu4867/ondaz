import { createClient } from "@supabase/supabase-js";

export const EVENTS_BUCKET = "event-images";

export function getSupabaseAdmin() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function verifyAdminPassword(password) {
  const expectedPassword = process.env.EVENT_ADMIN_PASSWORD;
  return Boolean(expectedPassword && password && password === expectedPassword);
}

export function sendJson(response, statusCode, payload) {
  response.status(statusCode).json(payload);
}
