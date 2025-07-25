import styles from './CampoInput.module.css';

function CampoInput(props) {
  return (
    <div className={styles.contenedor}>
      <label className={styles.etiqueta}>{props.label}</label>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}       // <-- Añade esta línea
        onChange={props.onChange}   // <-- Añade esta línea
      />
    </div>
  );
}

export default CampoInput;