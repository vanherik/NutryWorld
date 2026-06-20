// Floating mascot with a soft halo disc behind it.
// `name` maps to /mascots/<name>.png (transparent cut-outs).
export default function Mascot({ name, alt, size = "lg", float = true, className = "" }) {
  return (
    <figure className={`mascot mascot--${size} ${float ? "mascot--float" : ""} ${className}`}>
      <span className="mascot__halo" aria-hidden="true" />
      <img
        className="mascot__img"
        src={`/mascots/${name}.png?v=2`}
        alt={alt}
        loading="lazy"
        decoding="async"
        width="900"
        height="802"
      />
    </figure>
  );
}
