import "zone.js";

(window as any).Zone["__zone_symbol__ignoreConsoleErrorUncaughtError"] = true;
(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
