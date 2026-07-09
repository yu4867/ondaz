import { getSupabaseAdmin, sendJson, verifyAdminPassword } from "./_supabase.js";

function toClientEvent(row) {
  return {
    id: row.id,
    title: row.title,
    body: row.body,
    image: row.image_url || "",
    imageRatio: row.image_ratio || "",
    detailImages: Array.isArray(row.detail_images) ? row.detail_images : [],
    status: row.status || "progress",
  };
}

function toDbEvent(eventData, sortOrder) {
  return {
    id: String(eventData.id),
    title: String(eventData.title || "ONDAZ 이벤트"),
    body: String(eventData.body || "이벤트 내용을 입력해 주세요."),
    status: eventData.status === "done" ? "done" : "progress",
    image_url: eventData.image || null,
    image_ratio: eventData.imageRatio || null,
    detail_images: Array.isArray(eventData.detailImages) ? eventData.detailImages : [],
    sort_order: sortOrder,
    updated_at: new Date().toISOString(),
  };
}

export default async function handler(request, response) {
  try {
    const supabase = getSupabaseAdmin();

    if (request.method === "GET") {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("sort_order", { ascending: true })
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return sendJson(response, 200, { events: (data || []).map(toClientEvent) });
    }

    if (request.method === "PUT") {
      const { password, events } = request.body || {};
      if (!verifyAdminPassword(password)) {
        return sendJson(response, 401, { error: "관리자 비밀번호가 일치하지 않습니다." });
      }

      const nextEvents = Array.isArray(events) ? events : [];
      const rows = nextEvents.map((eventData, index) => toDbEvent(eventData, index));

      if (rows.length > 0) {
        const { error: upsertError } = await supabase.from("events").upsert(rows, { onConflict: "id" });
        if (upsertError) throw upsertError;
      }

      const submittedIds = new Set(rows.map((row) => row.id));
      const { data: existingRows, error: existingError } = await supabase.from("events").select("id");
      if (existingError) throw existingError;

      const idsToDelete = (existingRows || []).map((row) => row.id).filter((id) => !submittedIds.has(id));
      if (idsToDelete.length > 0) {
        const { error: deleteError } = await supabase.from("events").delete().in("id", idsToDelete);
        if (deleteError) throw deleteError;
      }

      return sendJson(response, 200, { events: nextEvents });
    }

    response.setHeader("Allow", "GET, PUT");
    return sendJson(response, 405, { error: "Method not allowed" });
  } catch (error) {
    return sendJson(response, 500, { error: error.message || "이벤트 처리 중 오류가 발생했습니다." });
  }
}
