###npm react + context:
#npm parancsok:
#  -install,run dev,create vite@latest

#react:
#  -componentekre bontás amit a main.tsx indít el
#  -app.tsx a fő componens

#componensek:
#  -return: mi jelenjen meg a képernyőn
#  -props ként komunikálnak, adnak át adatokat egymásnak

#context:
#  -createcontext() létrehoz egy context-et
#  -useContext() component hozzá tud férni egy contextben lévő adathoz
#  -provider biztosítja a gyermekcomponenseknek az adatokat
#  -usestate() változó állapotot tárolunk
#  -állapot megváltozik ha a componensek frissulnek

#provider:
#  -value tulajdonságban adunk át adatokat és fuggvényeket

#state:
#  -componens állapota
#  -lehet számláló érték, elem index
#  -állapot módosító fuggvénnyel változtatjuk meg (pl a kepgaleriaban)
#  a setaktualisindex(paraméter)

#öröklődés:
#  -osztály átveszi egy másik tulajdonságát,működését
#  -props által komunikálnak,öröklődnek

#"ölelés"+ main.tsx
#  -<StrictMode>
#    <KepProvider>
#      <App />
#    </KepProvider>
#  </StrictMode>,
#  -a main.tsx-ben a kep provider közé tesszül az app-ot
  