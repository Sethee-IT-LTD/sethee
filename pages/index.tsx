import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sethee LLC</title>
        <meta name="description" content="Automating the web frontier" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-slate-200">
          <section className="container mx-auto px-4">
            <div className="py-40">
              <h2 className="text-5xl my-5 font-bold">
                Automating the web frontier.
              </h2>
              <h3 className="mb-5 font-bold text-xl">
                Secure. Scalable. Resilient.
              </h3>
              <p className="max-w-2xl text-xl mb-5">
                A network node of experts who assist organizations in optimizing
                software development and delivery through infrastructure
                automation, continuous integration, cloud migration, and
                performance optimization.
              </p>
              <button className="round-none bg-black text-white px-6 py-3">
                Contact
              </button>
            </div>
          </section>
        </div>

        <section className="container mx-auto px-4 my-8">
          <h3 className="uppercase text-center font-bold text-lg">
            Trusted by
          </h3>
          <p className="text-xl">Bankless DAO</p>
          <p className="text-xl">Skillweed</p>
        </section>
      </main>
    </>
  );
}
