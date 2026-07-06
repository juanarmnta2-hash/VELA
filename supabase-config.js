// ============================================================
//  CONFIGURACIÓN DE SUPABASE  —  VELA
// ============================================================
//  Tus datos ya están puestos. La clave "publishable" es pública
//  por diseño (va en el navegador), así que no hay problema.
//  ⚠️ NUNCA pongas aquí la clave secreta (service_role).
// ------------------------------------------------------------

const SUPABASE_URL = "https://dstjpmfkxntqsllopfod.supabase.co";
const SUPABASE_KEY = "sb_publishable_pkbwhvs8nmWBtgGatk5xhA_pI9J8gBd";

// ------------------------------------------------------------
//  No toques nada de aquí para abajo.
// ------------------------------------------------------------
let sb;
if (window.supabase && window.supabase.createClient) {
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} else {
  console.error("La librería de Supabase no cargó. Revisa tu conexión a internet.");
}
