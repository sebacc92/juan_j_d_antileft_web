import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import PortadaImg from "~/media/portada.jpeg?jsx";

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-16 fade-in watercolor-bg min-h-screen">
      <h1 class="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center scale-hover">Sobre mí</h1>
      <div class="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto mb-12 fade-in">
        <PortadaImg class="rounded-3xl shadow-xl w-full md:w-1/2 scale-hover transition-all" />
        <div>
          <h2 class="font-playfair text-2xl font-semibold mb-4 scale-hover">Juan J. D. Antilef</h2>
          <p class="text-lg text-muted-foreground mb-4 fade-in">
            Nací en Ezeiza, Buenos Aires. Mi primer acercamiento al arte fue a través de la música, lo que me llevó a estudiar y recibirme como profesor de arte en artes visuales en 2006. En mi recorrido por las artes plásticas me desarrollé en pintura, dibujo y escultura, conjugando estas disciplinas en mis obras.
          </p>
          <p class="text-lg text-muted-foreground mb-4 fade-in">
            Trabajo la representación de figuras en sentido simbólico, lo onírico y la realidad del contexto de los animales y las personas. Utilizo la madera como soporte, relacionándola con mi infancia.
          </p>
          <p class="text-lg text-muted-foreground mb-4 fade-in">
            Realicé más de 30 exposiciones colectivas e individuales y participé en colaboraciones para portadas de música y libros.
          </p>
          <div class="flex flex-wrap gap-2 text-muted-foreground fade-in">
            <span>🎨 Artista</span>
            <span>🌍 Talleres de Acuarelas Online</span>
            <span>🖼 Venta de Obras</span>
            <span>
              <a href="https://www.youtube.com/results?search_query=juan+antilef" target="_blank" class="underline hover:text-primary transition-colors">YouTube JUAN ANTILEF</a>
            </span>
          </div>
        </div>
      </div>
      <div class="text-center fade-in">
        <Link href="/obras" class="btn btn-primary rounded-full btn-animated scale-hover">
          <Button look="outline">Ver galería de obras</Button>
        </Link>
      </div>
    </div>
  );
});