import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuInstagram, LuYoutube, LuFacebook } from "@qwikest/icons/lucide";

export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="bg-muted py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="font-playfair text-xl font-semibold mb-4">Juan J. D. Antilef</h3>
            <p class="text-muted-foreground mb-4">
              Artista visual especializado en acuarela. Profesor de arte y creador de cursos online.
            </p>
            <div class="flex space-x-4">
              <a
                href="https://instagram.com/juan_j_d_antilef"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-foreground hover:text-primary"
              >
                <LuInstagram class="h-5 w-5" />
                <span class="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com/c/JUANANTILEF"
                target="_blank"
                rel="noopener noreferrer"
                class="text-muted-foreground hover:text-primary"
              >
                <LuYoutube class="h-5 w-5" />
                <span class="sr-only">YouTube</span>
              </a>
              <a href="#" class="text-muted-foreground hover:text-primary">
                <LuFacebook class="h-5 w-5" />
                <span class="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 class="font-playfair text-xl font-semibold mb-4">Enlaces</h3>
            <ul class="space-y-2">
              <li>
                <Link href="/obras" class="text-muted-foreground hover:text-primary transition-colors">
                  Galería de Obras
                </Link>
              </li>
              <li>
                <Link href="/cursos" class="text-muted-foreground hover:text-primary transition-colors">
                  Cursos Online
                </Link>
              </li>
              <li>
                <Link href="/talleres" class="text-muted-foreground hover:text-primary transition-colors">
                  Talleres en Vivo
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" class="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" class="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-playfair text-xl font-semibold mb-4">Contacto</h3>
            <p class="text-muted-foreground mb-2">Para consultas sobre cursos, talleres o adquisición de obras.</p>
            <a href="mailto:info@juanantilef.com" class="text-primary hover:underline">
              info@juanantilef.com
            </a>
            <div class="mt-4">
              <a
                href="https://paypal.me/Juanantilef"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:underline"
              >
                Donaciones vía PayPal
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Juan J. D. Antilef. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
});
