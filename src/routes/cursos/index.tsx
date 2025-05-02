import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/ui";
import PortadaImg from "~/media/portada.jpeg?jsx";

export default component$(() => {
  return (
    <div class="container mx-auto px-4 py-16 fade-in watercolor-bg min-h-screen">
      <h1 class="font-playfair text-4xl md:text-5xl font-bold mb-8 text-center scale-hover">Cursos de Acuarela</h1>
      <p class="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto fade-in">
        Descubre los cursos online de Juan J. D. Antilef. Aprende técnicas de acuarela, composición, simbolismo y desarrolla tu propio estilo artístico. Todos los cursos son en español y en modalidad online, para que puedas aprender a tu ritmo desde cualquier lugar.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col scale-hover fade-in transition-all">
          <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Inicial: Naturaleza y Animales</h3>
          <ul class="space-y-2 mb-6 text-left">
            <li>• Fundamentos de la acuarela</li>
            <li>• Técnicas básicas y mezclas</li>
            <li>• Primeras composiciones sobre madera</li>
          </ul>
          <div class="mt-auto text-center">
            <div class="text-2xl font-bold mb-4">$20.000 ARS</div>
            <a href="#" class="btn btn-primary w-full rounded-full btn-animated scale-hover"><Button look="primary">Inscribirme</Button></a>
          </div>
        </div>
        <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col border-2 border-primary scale-hover fade-in transition-all">
          <div class="bg-primary text-primary-foreground p-2 text-center text-sm font-medium rounded mb-2 animate-pulse">
            Más popular
          </div>
          <h3 class="font-playfair text-xl font-semibold mb-4">Taller de Figuras y Simbolismo</h3>
          <ul class="space-y-2 mb-6 text-left">
            <li>• Representación simbólica</li>
            <li>• Técnicas mixtas: acuarela y dibujo</li>
            <li>• Proyecto final guiado</li>
          </ul>
          <div class="mt-auto text-center">
            <div class="text-2xl font-bold mb-4">$25.000 ARS</div>
            <a href="#" class="btn btn-primary w-full rounded-full btn-animated scale-hover"><Button look="primary">Inscribirme</Button></a>
          </div>
        </div>
        <div class="bg-white rounded-3xl shadow-lg p-6 flex flex-col scale-hover fade-in transition-all">
          <h3 class="font-playfair text-xl font-semibold mb-4">Acuarela Experimental: Técnicas Avanzadas</h3>
          <ul class="space-y-2 mb-6 text-left">
            <li>• Texturas y efectos especiales</li>
            <li>• Uso creativo de la madera</li>
            <li>• Desarrollo de estilo personal</li>
          </ul>
          <div class="mt-auto text-center">
            <div class="text-2xl font-bold mb-4">$30.000 ARS</div>
            <a href="#" class="btn btn-primary w-full rounded-full btn-animated scale-hover"><Button look="primary">Inscribirme</Button></a>
          </div>
        </div>
      </div>
      <div class="section-divider"></div>
      <div class="mt-12 text-center fade-in">
        <p class="text-lg mb-6">
          Algunos cursos en los que podrás participar:
        </p>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} class="aspect-square rounded-lg overflow-hidden scale-hover fade-in transition-all flex flex-col items-center justify-center bg-muted">
              <div>
                <PortadaImg />
              </div>
              <span class="text-xs mt-2 text-muted-foreground">Curso de acuarela {item}</span>
            </div>
          ))}
        </div>
        <Link href="#" class="btn btn-outline rounded-full btn-animated scale-hover">
          <Button look="outline">Ver todos los cursos</Button>
        </Link>
      </div>
    </div>
  );
});