NPM, React + Context
NPM parancsok
npm install – csomagok telepítése
npm run dev – fejlesztői szerver indítása
npm create vite@latest – új Vite-projekt létrehozása
React
A felületet komponensekre bontjuk, amelyeket a main.tsx indít el.
Az App.tsx a fő komponens.
Komponensek
A return határozza meg, mi jelenjen meg a képernyőn.
A komponensek Props segítségével adnak át adatokat egymásnak.
Context
createContext() – Context létrehozása.
useContext() – hozzáférés a Contextben tárolt adatokhoz.
A Provider biztosítja az adatokat a gyermekkomponenseknek.
useState() – változó állapot tárolása.
Az állapot változása újrarenderelést válthat ki.
Provider
A value tulajdonságban adatokat és függvényeket adunk át.
State
A komponens állapota.
Lehet például számláló értéke vagy egy elem indexe.
Az állapotot az állapotmódosító függvénnyel változtatjuk meg.
Példa: setAktIndex(paraméter).
Öröklődés
Egy osztály átveszi egy másik osztály tulajdonságait és működését.
Reactben a Props adatokat ad át a komponensek között, de ez nem klasszikus öröklődés.
Ölelés + main.tsx
A main.tsx a React alkalmazás belépési pontja.
A KepProvider körbeveszi az App komponenst.
Így az App és a gyermekkomponensei hozzáférhetnek a Context adataihoz.

```tsx
<StrictMode>
<KepProvider>
<App />
</KepProvider>
</StrictMode>
```
  