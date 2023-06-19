import styles from './Styles.module.css';

export default function TypewriterEffect({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?:string;
}) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.typedOut} ${className}`}>{children}</div>
    </div>
  );
}
