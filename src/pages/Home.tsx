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
                <div className="">
                  "Loading..."
                  <IndeterminateProgressBar />
                </div>);
              setTimeout(() => {
                toast.success("Done!", { id });
              }, 20000);
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
                  <strong>Custom message</strong>
                  <p className="text-xs text-muted-foreground">
                    You can render React inside.
                  </p>
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