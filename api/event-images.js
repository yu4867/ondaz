import { EVENTS_BUCKET, getSupabaseAdmin, sendJson, verifyAdminPassword } from "./_supabase.js";

function getExtension(fileName = "", mimeType = "") {
  const fromName = fileName.split(".").pop()?.toLowerCase();
  if (fromName && /^[a-z0-9]+$/.test(fromName)) return fromName;
  if (mimeType === "image/png") return "png";
  if (mimeType === "image/webp") return "webp";
  if (mimeType === "image/gif") return "gif";
  return "jpg";
}

export default async function handler(request, response) {
  try {
    if (request.method !== "POST") {
      response.setHeader("Allow", "POST");
      return sendJson(response, 405, { error: "Method not allowed" });
    }

    const { password, fileName, dataUrl } = request.body || {};
    if (!verifyAdminPassword(password)) {
      return sendJson(response, 401, { error: "관리자 비밀번호가 일치하지 않습니다." });
    }

    const match = String(dataUrl || "").match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
    if (!match) {
      return sendJson(response, 400, { error: "이미지 데이터가 올바르지 않습니다." });
    }

    const [, mimeType, base64] = match;
    const buffer = Buffer.from(base64, "base64");
    const extension = getExtension(fileName, mimeType);
    const path = `events/${Date.now()}-${Math.random().toString(36).slice(2, 10)}.${extension}`;
    const supabase = getSupabaseAdmin();

    const { error: uploadError } = await supabase.storage.from(EVENTS_BUCKET).upload(path, buffer, {
      contentType: mimeType,
      upsert: false,
    });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from(EVENTS_BUCKET).getPublicUrl(path);
    return sendJson(response, 200, {
      image: {
        id: `image-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        src: data.publicUrl,
        alt: String(fileName || "").replace(/\.[^.]+$/, ""),
      },
    });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "이미지 업로드 중 오류가 발생했습니다." });
  }
}
