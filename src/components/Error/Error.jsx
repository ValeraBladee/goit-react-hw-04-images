import css from './Error.module.css';

export default function Error({ title }) {
  return (
    <div className={css.parentContainer}>
      <h2 className={`${css.title} animate__animated animate__rotateIn`}>
        {title}
      </h2>
    </div>
  );
}
