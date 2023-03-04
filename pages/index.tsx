import Layout from 'components/Layout';

const cards = [...Array(10).keys()].map((_, i) => (
  <div className="w-full p-5" key={i}>
    <div className="bg-background dark:bg-dark-background rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          ></svg>
        </span>
      </div>
      <h3 className="mt-5 text-base font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
  </div>
));

export default function Home() {
  return (
    <Layout>
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
        {cards.map((card) => card)}

        <div>01</div>
  <div>02</div>
  <div>03</div>
      </div>
    </Layout>
  );
}
