import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = milliseconds => {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let ms = milliseconds % 1000;

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    ms = ms.toString().padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return (
    <div className={styles.component}>
      {formatTime(time)}
    </div>
  );
};

export default FormattedTime;