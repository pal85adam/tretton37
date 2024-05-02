function Loader() {
  return (
    <div
      className="inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] bs-12 is-12 mlb-24 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default Loader;
