import { useTranslation } from "react-i18next";
import { FullScreenLoader, IndeterminateProgressBar } from "../components/Loading";
import { useEffect, useState } from "react";
import Show from "../components/Show";
import { Link } from "react-router";
import { APP_BASENAME } from "../config/constans";
import { toast } from "sonner";
import { Button } from "../components/ui/button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t("home.title")}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          {t("home.subtitle")}
        </p>

        {/* Enlace al repositorio */}
        <a
          href="https://github.com/rcastrogo/ReactApp2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-4 rounded-2xl bg-primary text-primary-foreground font-medium shadow hover:opacity-90 transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 .297a12 12 0 00-3.794 23.405c.6.111.82-.258.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.789.418-1.304.762-1.603-2.665-.305-5.466-1.362-5.466-6.06 0-1.338.465-2.433 1.235-3.289-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.257A11.52 11.52 0 0112 6.07c1.02.005 2.047.138 3.003.404 2.289-1.58 3.295-1.257 3.295-1.257.655 1.653.244 2.873.12 3.176.773.856 1.233 1.951 1.233 3.289 0 4.71-2.807 5.752-5.479 6.048.43.37.823 1.099.823 2.218v3.293c0 .322.216.694.825.576A12.004 12.004 0 0012 .297z"
              clipRule="evenodd"
            />
          </svg>
          {t("home.viewRepo") || "Ver repositorio"}
        </a>

      </section>

      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <HomeCard
          title={t("text:intro")}
          description={t("text:intro2")}
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
          to=""
        />
        <HomeCard
          title={t("home.cards.pagedTable.title")}
          description={t("home.cards.pagedTable.description")}
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          to="/countries"
        />

        <HomeCard
          title={t("home.cards.about.title")}
          description={t("home.cards.about.description")}
          image="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80"
          to="/about"
        >
          <div className="m-5 p-1 border rounded-xl"><img className="rounded-xl" src={APP_BASENAME + "glypy.webp"} /></div>
        </HomeCard>

        <HomeCard
          title={t("home.cards.config.title")}
          description={t("home.cards.config.description")}
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
          to="/config"
        />

        <HomeCard
          title={t("home.cards.contact.title")}
          description={t("home.cards.contact.description")}
          image="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
          to="/contact"
        />

        <HomeCard
          title={t("home.cards.dashboard.title")}
          description={t("home.cards.dashboard.description")}
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
          to="/dashboard"
        />
      </section>
      <section className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Toast básico</h3>
          <p className="text-sm text-muted-foreground">
            Muestra un mensaje simple sin estilos especiales.
          </p>
          <Button
            className="btn btn-primary"
            onClick={() => toast("Hello world!")}
          >
            Mostrar toast
          </Button>
        </div>

        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Éxito</h3>
          <p className="text-sm text-muted-foreground">
            Ideal para confirmar que algo ha ido bien.
          </p>
          <Button
            className="btn btn-success"
            onClick={() => toast.success("Everything OK!")}
          >
            Mostrar éxito
          </Button>
        </div>


        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Error</h3>
          <p className="text-sm text-muted-foreground">
            Úsalo para avisar de un fallo o problema.
          </p>
          <Button
            className="btn btn-destructive"
            onClick={() => toast.error("Something went wrong", { className: "gb-red-500" })}
          >
            Mostrar error
          </Button>
        </div>
        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Advertencia</h3>
          <p className="text-sm text-muted-foreground">
            Para avisos que no son críticos.
          </p>
          <Button
            className="btn btn-warning"
            onClick={() => toast.warning("Be careful!")}

          >
            Mostrar warning
          </Button>
        </div>

        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Duración personalizada</h3>
          <p className="text-sm text-muted-foreground">
            Controla cuánto tiempo permanece visible.
          </p>
          <Button
            className="btn btn-primary"
            onClick={() =>
              toast("Visible durante 5s", { duration: 5000 })
            }
          >
            Mostrar toast 5s
          </Button>
        </div>

        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Descripción</h3>
          <p className="text-sm text-muted-foreground">
            Útil para información más completa.
          </p>
          <Button
            className="btn btn-secondary"
            onClick={() =>
              toast("Upload complete", { description: "Your file is now online." })
            }
          >
            Mostrar descripción
          </Button>
        </div>
        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Acción</h3>
          <p className="text-sm text-muted-foreground">
            Añade un botón dentro del toast (Undo, Retry…).
          </p>
          <Button
            className="btn btn-accent"
            onClick={() =>
              toast("File deleted", {
                action: {
                  label: "Undo",
                  onClick: () => toast("Undo done!"),
                },
              })
            }
          >
            Mostrar acción
          </Button>
        </div>
        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Loading</h3>
          <p className="text-sm text-muted-foreground">
            Se usa mientras esperas una operación async.
          </p>
          <Button
            className="btn btn-primary"
            onClick={() => {
              const id = toast.loading(
                <div>
                  "Loading..."
                  <IndeterminateProgressBar />
                </div>,
                {
                  classNames: {
                    content: "w-full bg-gray-400 p-5 rounded-xl",
                  }
                }
              );
              setTimeout(() => {
                toast.success("Done!", { id });
              }, 2000);
            }}
          >
            Mostrar loading
          </Button>
        </div>
        <div className="border rounded-xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold">Contenido JSX</h3>
          <p className="text-sm text-muted-foreground bg-background dark:bg-background">
            Puedes componer el mensaje como un componente.
          </p>
          <Button
            className="btn btn-primary"
            onClick={() =>
              toast(
                <div>
                  <strong>Glypy</strong>
                  <p className="text-xs text-muted-foreground">
                    {t("home.cards.dashboard.description")}
                  </p>
                  <div className="m-5 p-1 border rounded-xl">
                    <img className="rounded-xl" src={APP_BASENAME + "glypy.webp"} />
                  </div>
                </div>
              )
            }
          >
            Mostrar JSX
          </Button>
        </div>
      </section>

      <Show when={isLoading}>
        <FullScreenLoader message={t('general.action.loading')} />
      </Show>

    </div>
  );
}

function HomeCard({
  title,
  description,
  image,
  to,
  children,
}: {
  title: string;
  description: string;
  image: string;
  to: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="block group rounded-xl overflow-hidden border hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        {children && (
          <div className="mt-2">
            {children}
          </div>
        )}
      </div>
    </Link>
  )
}