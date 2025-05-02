import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import Person1Img from "~/media/testimonios/person1.jpeg?jsx";
import Person2Img from "~/media/testimonios/person2.jpeg?jsx";
import Person3Img from "~/media/testimonios/person3.jpeg?jsx";

// Generar la lista de obras automáticamente a partir de los archivos de la carpeta
const obras = [
  // JPEG
  { filename: "391172982_763759622428730_5071086916417466739_n.jpeg", title: "Obra 1", category: "Retratos", price: "$250 USD", available: true },
  { filename: "393495186_286912430916714_987229644039457728_n.jpeg", title: "Obra 2", category: "Paisajes", price: "$320 USD", available: true },
  { filename: "412234820_342384601879687_4193133622165551802_n.jpeg", title: "Obra 3", category: "Arte Botánico", price: "$380 USD", available: false },
  { filename: "412422298_203762999472111_7996940879887325183_n.jpeg", title: "Obra 4", category: "Urbano", price: "$290 USD", available: true },
  { filename: "412663746_1118787876159656_7975383720406185196_n.jpeg", title: "Obra 5", category: "Arte Botánico", price: "$270 USD", available: true },
  { filename: "416166974_341427275339702_5575019387224146054_n.jpeg", title: "Obra 6", category: "Paisajes", price: "$340 USD", available: true },
  { filename: "416214458_345375721571086_2247938245389487_n.jpeg", title: "Obra 7", category: "Abstracto", price: "$310 USD", available: true },
  { filename: "419712466_1104613524073067_6348921251481864988_n.jpeg", title: "Obra 8", category: "Urbano", price: "$350 USD", available: true },
  { filename: "420635766_386520083784087_9050204355700618802_n.jpeg", title: "Obra 9", category: "Arte Botánico", price: "$280 USD", available: true },
  { filename: "420813940_691590033162609_4476733247371150372_n.jpeg", title: "Obra 10", category: "Abstracto", price: "$300 USD", available: true },
  { filename: "426304016_1091326478865270_2265363498240471216_n.jpeg", title: "Obra 11", category: "Paisajes", price: "$310 USD", available: true },
  { filename: "429665004_929081271841460_1681860954979941726_n.jpeg", title: "Obra 12", category: "Retratos", price: "$320 USD", available: true },
  { filename: "431154284_381971211215759_735719428229222131_n.jpeg", title: "Obra 13", category: "Arte Botánico", price: "$330 USD", available: true },
  { filename: "431541220_1136015067578839_7637325369499383105_n.jpeg", title: "Obra 14", category: "Urbano", price: "$340 USD", available: true },
  { filename: "432720604_2675111862649201_8072786846677899749_n.jpeg", title: "Obra 15", category: "Paisajes", price: "$350 USD", available: true },
  { filename: "448008639_7679594582077007_684112548152003165_n.jpeg", title: "Obra 16", category: "Abstracto", price: "$360 USD", available: true },
  { filename: "454022512_1178224859951840_2918940953445594937_n.jpeg", title: "Obra 17", category: "Retratos", price: "$370 USD", available: true },
  { filename: "457211052_1134310321609182_3335825550864884621_n.jpeg", title: "Obra 18", category: "Arte Botánico", price: "$380 USD", available: true },
  { filename: "457657102_1031315924852488_5730086452477358831_n.jpeg", title: "Obra 19", category: "Paisajes", price: "$390 USD", available: true },
  { filename: "457834853_1563312470887406_3250402115938687235_n.jpeg", title: "Obra 20", category: "Abstracto", price: "$400 USD", available: true },
  { filename: "457864985_482017544795832_2469966812469859305_n.jpeg", title: "Obra 21", category: "Retratos", price: "$410 USD", available: true },
  { filename: "459122745_500464129465150_732711563692121452_n.jpeg", title: "Obra 22", category: "Urbano", price: "$420 USD", available: true },
  { filename: "466926942_1204222184021653_3140799574355681426_n.jpeg", title: "Obra 23", category: "Arte Botánico", price: "$430 USD", available: true },
  { filename: "468305521_544934165177547_3071149051588373586_n.jpeg", title: "Obra 24", category: "Paisajes", price: "$440 USD", available: true },
  { filename: "468506777_1756671751830421_1704033550550200368_n.jpeg", title: "Obra 25", category: "Abstracto", price: "$450 USD", available: true },
  { filename: "469221809_1626813001205069_6250982168797100485_n.jpeg", title: "Obra 26", category: "Retratos", price: "$460 USD", available: true },
  { filename: "469723490_1272116937458709_2774436296883165200_n.jpeg", title: "Obra 27", category: "Paisajes", price: "$470 USD", available: true },
  // WEBP
  { filename: "476245560_18487252147057533_3506202010384813999_n (1).webp", title: "Obra 28", category: "Arte Botánico", price: "$480 USD", available: true },
  { filename: "476245560_18487252147057533_3506202010384813999_n.webp", title: "Obra 29", category: "Arte Botánico", price: "$490 USD", available: true },
  { filename: "477025196_18488372650057533_6293226822411525945_n.webp", title: "Obra 30", category: "Abstracto", price: "$500 USD", available: true },
  { filename: "477408578_18488720137057533_6896311076172117879_n.webp", title: "Obra 31", category: "Paisajes", price: "$510 USD", available: true },
  { filename: "480806421_18490331149057533_7852290059381029238_n.webp", title: "Obra 32", category: "Retratos", price: "$520 USD", available: true },
  { filename: "481760911_18491412598057533_2842716523085572046_n.webp", title: "Obra 33", category: "Arte Botánico", price: "$530 USD", available: true },
  { filename: "481992416_18491989402057533_3281170219943396291_n.webp", title: "Obra 34", category: "Urbano", price: "$540 USD", available: true },
  { filename: "482094030_18491681059057533_2421255741559669672_n.webp", title: "Obra 35", category: "Paisajes", price: "$550 USD", available: true },
  { filename: "482684712_18492166702057533_5647453531178478869_n.webp", title: "Obra 36", category: "Arte Botánico", price: "$560 USD", available: true },
  { filename: "483966806_18493583794057533_2152820274593929904_n.webp", title: "Obra 37", category: "Abstracto", price: "$570 USD", available: true },
  { filename: "485064387_18495652066057533_4260899719155854_n.webp", title: "Obra 38", category: "Retratos", price: "$580 USD", available: true },
  { filename: "486103091_18496655524057533_770274293301379280_n.webp", title: "Obra 39", category: "Paisajes", price: "$590 USD", available: true },
  { filename: "486665760_18497140210057533_6896776686241257546_n.webp", title: "Obra 40", category: "Arte Botánico", price: "$600 USD", available: true },
  { filename: "486942544_18497053285057533_3353114304896284564_n.webp", title: "Obra 41", category: "Abstracto", price: "$610 USD", available: true },
  { filename: "487784597_18498145795057533_9122776137575980880_n.webp", title: "Obra 42", category: "Retratos", price: "$620 USD", available: true },
  { filename: "491444264_18500998522057533_5602731465405223701_n.webp", title: "Obra 43", category: "Paisajes", price: "$630 USD", available: true },
];

const categorias = [
  "Todas",
  ...Array.from(new Set(obras.map((obra) => obra.category)))
];

export default component$(() => {
  const categoriaActiva = useSignal("Todas");
  const obrasFiltradas = categoriaActiva.value === "Todas"
    ? obras
    : obras.filter((obra) => obra.category === categoriaActiva.value);

  return (
    <div class="watercolor-bg min-h-screen fade-in">
      {/* Hero Section */}
      <section class="py-16 md:py-24 fade-in" style={{animationDelay: '0.1s'}}>
        <div class="container mx-auto px-4 text-center">
          <h1 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 scale-hover">Galería de Obras</h1>
          <p class="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto fade-in">Descubre y adquiere obras originales en acuarela creadas por Juan Antilef. Cada pieza es única y refleja la pasión por el arte y la naturaleza.</p>
        </div>
      </section>

      <div class="section-divider"></div>

      {/* Filtros */}
      <section class="pb-16 fade-in" style={{animationDelay: '0.2s'}}>
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap gap-4 justify-center mb-12">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                look={categoriaActiva.value === categoria ? "primary" : "outline"}
                class="rounded-full btn-animated scale-hover transition-all"
                onClick$={() => (categoriaActiva.value = categoria)}
              >
                {categoria}
              </Button>
            ))}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obrasFiltradas.map((obra, idx) => (
              <div key={obra.filename} class="bg-white rounded-3xl overflow-hidden shadow-lg scale-hover fade-in transition-all">
                <div class="relative aspect-square w-full">
                  <img
                    src={`/src/media/obras/${obra.filename}`}
                    alt={obra.title}
                    class="object-cover w-full h-full"
                    loading="lazy"
                  />
                  {!obra.available && (
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span class="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                        Vendido
                      </span>
                    </div>
                  )}
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-playfair text-xl font-semibold">{obra.title}</h3>
                    <span class="text-sm text-muted-foreground">{obra.category}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold">{obra.price}</span>
                    <Button look="outline" disabled={!obra.available} class="rounded-full btn-animated scale-hover">
                      <Link href={`/obras/${idx + 1}`}>
                        {obra.available ? "Ver detalles" : "No disponible"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      {/* Encargos */}
      <section class="py-16 bg-primary/5 fade-in" style={{animationDelay: '0.3s'}}>
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <h2 class="font-playfair text-3xl md:text-4xl font-bold mb-4 scale-hover">Encargos Personalizados</h2>
              <p class="text-lg text-muted-foreground fade-in">
                ¿Buscas una obra única para tu espacio? Puedo crear una pieza personalizada según tus preferencias.
              </p>
            </div>
            <div class="bg-white rounded-3xl shadow-lg p-8 fade-in">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 class="font-playfair text-xl font-semibold mb-4">Proceso de Encargo</h3>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <span class="mr-2 font-bold">1.</span>
                      <span>Consulta inicial para entender tus necesidades y preferencias.</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2 font-bold">2.</span>
                      <span>Bocetos preliminares para tu aprobación.</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2 font-bold">3.</span>
                      <span>Creación de la obra con actualizaciones durante el proceso.</span>
                    </li>
                    <li class="flex items-start">
                      <span class="mr-2 font-bold">4.</span>
                      <span>Entrega segura de la obra finalizada.</span>
                    </li>
                  </ul>
                  <div class="mt-6">
                    <Button look="primary" class="rounded-full btn-animated scale-hover">
                      <Link href="/contacto">Solicitar un encargo</Link>
                    </Button>
                  </div>
                </div>
                <div class="relative h-64 md:h-auto rounded-lg overflow-hidden fade-in">
                  <img
                    src="https://kzmfxq2066jaf8x35po4.lite.vusercontent.net/placeholder.svg?height=300&width=400"
                    alt="Proceso de encargo"
                    class="object-cover w-full h-full scale-hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      {/* Testimonios */}
      <section class="py-16 bg-white fade-in" style={{animationDelay: '0.4s'}}>
        <div class="container mx-auto px-4">
          <h2 class="font-playfair text-3xl font-bold text-center mb-12 scale-hover">Lo que dicen los coleccionistas</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} class="bg-white rounded-3xl shadow-lg p-6 scale-hover fade-in transition-all">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                    {item === 1 && <Person1Img />}
                    {item === 2 && <Person2Img />}
                    {item === 3 && <Person3Img />}
                  </div>
                  <div>
                    <h4 class="font-medium">Nombre del Coleccionista</h4>
                    <p class="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <p class="italic text-muted-foreground">
                  "La obra de Juan tiene una sensibilidad única. Los colores y la técnica son excepcionales. Estoy encantado/a con mi adquisición y sin duda volveré a comprar más piezas."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});