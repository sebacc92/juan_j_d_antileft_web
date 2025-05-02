import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import Person1Img from "~/media/testimonios/person1.jpeg?jsx";
import Person2Img from "~/media/testimonios/person2.jpeg?jsx";
import Person3Img from "~/media/testimonios/person3.jpeg?jsx";

// Puedes categorizar manualmente o por nombre de archivo si lo deseas
const obras = [
  { filename: "391172982_763759622428730_5071086916417466739_n.jpeg", title: "Obra 1", category: "Retratos", price: "$250 USD", available: true },
  { filename: "393495186_286912430916714_987229644039457728_n.jpeg", title: "Obra 2", category: "Paisajes", price: "$320 USD", available: true },
  { filename: "412234820_342384601879687_4193133622165551802_n.jpeg", title: "Obra 3", category: "Arte Botánico", price: "$380 USD", available: false },
  { filename: "412422298_203762999472111_7996940879887325183_n.jpeg", title: "Obra 4", category: "Urbano", price: "$290 USD", available: true },
  { filename: "412663746_1118787876159656_7975383720406185196_n.jpeg", title: "Obra 5", category: "Arte Botánico", price: "$270 USD", available: true },
  { filename: "416166974_341427275339702_5575019387224146054_n.jpeg", title: "Obra 6", category: "Paisajes", price: "$340 USD", available: true },
  { filename: "416214458_345375721571086_2247938245389487_n.jpeg", title: "Obra 7", category: "Abstracto", price: "$310 USD", available: true },
  { filename: "419712466_1104613524073067_6348921251481864988_n.jpeg", title: "Obra 8", category: "Urbano", price: "$350 USD", available: true },
  { filename: "420635766_386520083784087_9050204355700618802_n.jpeg", title: "Obra 9", category: "Arte Botánico", price: "$280 USD", available: true },
  // ...agrega más obras si lo deseas
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