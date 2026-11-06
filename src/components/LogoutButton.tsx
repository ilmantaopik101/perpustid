"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [sedangLogout, setSedangLogout] = useState(false);
  const [pesanError, setPesanError] = useState("");

  async function handleLogout() {
    setSedangLogout(true);
    setPesanError("");

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      const result = await response.json();

      if (!response.ok) {
        setPesanError(result.message || "Logout gagal.");
        return;
      }

      router.replace("/login");
      router.refresh();
    } catch {
      setPesanError(
        "Tidak dapat terhubung ke server. Silakan coba kembali."
      );
    } finally {
      setSedangLogout(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={sedangLogout}
        className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sedangLogout ? "Keluar..." : "Logout"}
      </button>

      {pesanError && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {pesanError}
        </p>
      )}
    </div>
  );
}