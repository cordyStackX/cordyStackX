export default async function Fetch_to<T = unknown>(
  dir: string,
  payload: Record<string, unknown> = {},
  headers: Record<string, string> = {}
): Promise<T | null> {
  if (!dir || dir === "") {
    alert("Invalid API Directory not found");
    return null;
  }

  try {
    const response = await fetch(dir, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers},
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Failed to fetch ${dir}: ${response.status}`);

    const data: T = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch_to error:", err);
    return null;
  }
}
