// Italian names of the twenty regions, keyed by the English region slug.
export const itRegionNames: Record<string, string> = {
  abruzzo: "Abruzzo",
  basilicata: "Basilicata",
  calabria: "Calabria",
  campania: "Campania",
  "emilia-romagna": "Emilia-Romagna",
  "friuli-venezia-giulia": "Friuli-Venezia Giulia",
  lazio: "Lazio",
  liguria: "Liguria",
  lombardy: "Lombardia",
  marche: "Marche",
  molise: "Molise",
  piedmont: "Piemonte",
  puglia: "Puglia",
  sardinia: "Sardegna",
  sicily: "Sicilia",
  tuscany: "Toscana",
  "trentino-alto-adige": "Trentino-Alto Adige",
  umbria: "Umbria",
  "aosta-valley": "Valle d'Aosta",
  veneto: "Veneto",
};

/** Short tile labels for the schematic region map. */
export const itRegionTileLabels: Record<string, string> = {
  ...itRegionNames,
  "aosta-valley": "Aosta",
  "trentino-alto-adige": "Trentino",
  "friuli-venezia-giulia": "Friuli",
  basilicata: "Basili­cata",
};
